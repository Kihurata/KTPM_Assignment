import 'dotenv/config';
import { Pool } from 'pg';

function required(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env ${name}`);
  return v;
}

export const pool = new Pool({
  host: required('PGHOST'),
  port: Number(required('PGPORT')),
  user: required('PGUSER'),
  password: required('PGPASSWORD'),
  database: required('PGDATABASE'),
  max: 10,
  idleTimeoutMillis: 10_000
});

export async function assertDb() {
  const r = await pool.query('SELECT 1');
  if (r.rowCount !== 1) throw new Error('DB connection failed');
}