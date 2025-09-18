// src/db/pg.ts
import 'dotenv/config';
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.PGHOST || '127.0.0.1',
  port: Number(process.env.PGPORT || 5432),
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE || 'CarCatalog',
  ssl: (() => {
    // PGSSLMODE=disable -> false | require -> { rejectUnauthorized: false } (tuỳ bạn)
    const mode = (process.env.PGSSLMODE || 'disable').toLowerCase();
    if (mode === 'disable') return false;
    return { rejectUnauthorized: false } as any;
  })(),
  // optional: tuning
  max: 10,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 10_000,
});

// Đặt search_path để mặc định vào schema car_catalog
pool.on('connect', (client) => {
  client.query(`SET search_path TO car_catalog, public;`).catch((e) => {
    console.error('Failed to set search_path:', e);
  });
});

export { pool };