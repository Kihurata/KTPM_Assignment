import 'dotenv/config';
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT || 5432),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: false } : undefined,
});

async function main() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const ins = await client.query(
      `INSERT INTO listings (
        seller_id, car_model_id, car_variant_id,
        brand, model_name, segment, year, color,
        price_cents, currency, status, is_hot,
        variant_specs, policies, rating_avg
      ) VALUES (
        gen_random_uuid(), gen_random_uuid(), gen_random_uuid(),
        $1, $2, $3, $4, $5,
        $6, 'VND', 'ACTIVE', true,
        $7, $8, 4.6
      ) RETURNING id`,
      [
        'Toyota', 'Vios', 'Sedan', 2020, 'Silver',
        520_000_000n, // BIGINT
        JSON.stringify({ engine: '1.5L', transmission: 'CVT', fuel_economy: '5.8L/100km' }),
        JSON.stringify([{ policy: 'Bảo hành 3 năm' }]),
      ]
    );
    const listingId = ins.rows[0].id as string;

    await client.query(
      `INSERT INTO listing_images (listing_id, url, is_cover, sort_order)
       VALUES ($1, $2, true, 1), ($1, $3, false, 2)`,
      [
        listingId,
        'https://example.com/images/vios-cover.jpg',
        'https://example.com/images/vios-side.jpg',
      ]
    );

    await client.query('COMMIT');
    console.log('✅ Seed OK:', listingId);
  } catch (e) {
    await pool.query('ROLLBACK');
    console.error('❌ Seed error:', e);
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch(e => { console.error(e); process.exit(1); });
