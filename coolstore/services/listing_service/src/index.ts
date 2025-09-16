import express from 'express';
import cors from 'cors';
import { assertDb } from './db/pg';
import listingsRouter from './routes/listings';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));
app.use('/api/listings', listingsRouter);

const PORT = Number(process.env.PORT || 3001);

assertDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listing Service running at http://localhost:${PORT}`);
    });
  })
  .catch((e) => {
    console.error('DB connection failed:', e);
    process.exit(1);
  });
