import express from 'express';
import cors from 'cors';
import carCatalogRouter from './routes/carCatalog';
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));

// api for listings
app.use('/api/carcatalog', carCatalogRouter);      

const PORT = Number(process.env.PORT || 3001);

app.listen(PORT, () => {
      console.log(`Listing Service running at http://localhost:${PORT}`);
    });