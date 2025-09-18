import { Request, Response } from 'express';
import { pool } from '../db/pg';
import {
  SQL_LIST_ALL_CAR_MODEL, SQL_LIST_ALL_CAR_VARIANT, SQL_LIST_ALL_MEDIA
} from '../sql/carModel.sql';
// import { ListQuery } from '../validators/listingsValidator';

// function get all data from car_models
export async function getAllCarModels(req: Request, res: Response) {
  try {
    const sql = SQL_LIST_ALL_CAR_MODEL();
    const result = await pool.query(sql);
    res.json(result.rows);
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: "DB_ERROR", detail: e.message });
  }
}

// function get all data from car_variant
export async function getAllCarVariant(req: Request, res: Response) {
  try {
    const sql = SQL_LIST_ALL_CAR_VARIANT();
    const result = await pool.query(sql);
    res.json(result.rows);
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: "DB_ERROR", detail: e.message });
  }
}

// function get all data from media
export async function getAllMedia(req: Request, res: Response) {
  try {
    const sql = SQL_LIST_ALL_MEDIA();
    const result = await pool.query(sql);
    res.json(result.rows);
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: "DB_ERROR", detail: e.message });
  }
}