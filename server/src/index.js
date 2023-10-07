import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);

mongoose
  .connect(
    `mongodb+srv://iskrengyorev:${process.env.DB_PASS}@photo-app.qs65nxs.mongodb.net`
  )
  .then(() => console.log('Connected to db'));

app.listen(4000);
