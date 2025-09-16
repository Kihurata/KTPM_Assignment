import { Request, Response } from 'express';
import { pool } from '../db/pg';
import {
  SQL_LIST_ALL
} from '../sql/listings.sql';
// import { ListQuery } from '../validators/listingsValidator';

export async function getAllListings(req: Request, res: Response) {
  try {
    // mặc định sort theo created_at mới nhất
    const sql = SQL_LIST_ALL("", "ORDER BY l.created_at DESC");
    const result = await pool.query(sql);
    res.json(result.rows);
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: "DB_ERROR", detail: e.message });
  }
}