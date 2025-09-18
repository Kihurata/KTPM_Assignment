import express from 'express';
import cors from 'cors';
import { assertDb } from './db/pg';
import listingsRouter from './routes/listings';
import carModelsRouter from './routes/carModels';
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));

// api for listings
app.use('/api/listings', listingsRouter);
// api for car-models
app.use('/api', carModelsRouter);              

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


  // car-models route