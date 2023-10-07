import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

import { userRouter } from './routes/users.js';
import { photoRouter } from './routes/photos.js';

const app = express();
app.use(express.json());

app.use(cors());

app.use('/users', userRouter);
app.use('/photos', photoRouter);

mongoose
  .connect(
    `mongodb+srv://iskrengyorev:${process.env.DB_PASS}@photo-app.qs65nxs.mongodb.net`
  )
  .then(() => console.log('Connected to db'));

app.listen(4000);
