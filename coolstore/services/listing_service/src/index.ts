import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import images from './routes/images';

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(',').map(s => s.trim()) || true,
}));

app.get('/', (_req, res) => {
  res.json({ service: 'listing-image-service', status: 'running' });
});
app.use('/images', images);

const port = Number(process.env.PORT || 4001);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
