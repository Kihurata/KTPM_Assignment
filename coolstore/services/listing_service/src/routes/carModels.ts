import express from "express";
import { Pool } from "pg";

const router = express.Router();
let pool: Pool;
export const attachPool = (p: Pool) => (pool = p);

router.get("/car-models", async (_req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT 
        model_name AS name,
        segment,
        url AS image_url
      FROM car_model
      ORDER BY created_at ASC
    `);
    res.json(rows);
  } catch (e: any) {
    console.error(e);
    res.status(500).send(e.message ?? "DB error");
  }
});

export default router;
