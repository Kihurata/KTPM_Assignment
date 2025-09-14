import { Router } from 'express';
import { getPool } from '../db/pg';

const router = Router();

/**
 * GET /images?listingId=<uuid>
 * Trả metadata ảnh (url, is_cover, sort_order) cho 1 listing
 * Nếu không truyền listingId -> trả top 100 ảnh mới nhất
 */
router.get('/', async (req, res) => {
  try {
    const pool = getPool();
    const listingId = req.query.listingId as string | undefined;

    const { rows } = listingId
      ? await pool.query(
          `SELECT id, listing_id, url, is_cover, sort_order
           FROM listing_images
           WHERE listing_id = $1
           ORDER BY is_cover DESC, sort_order ASC, id ASC`,
          [listingId]
        )
      : await pool.query(
          `SELECT id, listing_id, url, is_cover, sort_order
           FROM listing_images
           ORDER BY id DESC
           LIMIT 100`
        );

    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'DB error' });
  }
});

/**
 * GET /images/:imageId/stream
 * Đổi sang: redirect 302 tới URL trong DB (đơn giản, không tải qua server)
 */
router.get('/:imageId/stream', async (req, res) => {
  try {
    const pool = getPool();
    const { imageId } = req.params;

    const { rows } = await pool.query(
      `SELECT url FROM listing_images WHERE id = $1 LIMIT 1`,
      [imageId]
    );
    if (!rows.length) return res.status(404).json({ error: 'Image not found' });

    const { url } = rows[0] as { url: string };
    // Nếu bạn muốn proxy (không lộ URL), mình có thể đổi sang fetch & stream.
    return res.redirect(302, url);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'DB error' });
  }
});

/**
 * (tiện ích) GET /listings
 * Trả danh sách listing để bạn dễ lấy id test
 */
router.get('/../listings', async (_req, res) => {
  try {
    const pool = getPool();
    const { rows } = await pool.query(
      `SELECT id, brand, model_name, year, status
       FROM listings
       ORDER BY id DESC
       LIMIT 50`
    );
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'DB error' });
  }
});

/**
 * (tuỳ chọn) GET /images/cover/by-listing/:listingId
 * Redirect tới ảnh cover của listing
 */
router.get('/cover/by-listing/:listingId', async (req, res) => {
  try {
    const pool = getPool();
    const { listingId } = req.params;

    const { rows } = await pool.query(
      `SELECT url
       FROM listing_images
       WHERE listing_id = $1
       ORDER BY is_cover DESC, sort_order ASC, id ASC
       LIMIT 1`,
      [listingId]
    );
    if (!rows.length) return res.status(404).json({ error: 'Cover not found' });

    return res.redirect(302, rows[0].url as string);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'DB error' });
  }
});

export default router;
