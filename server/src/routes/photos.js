import express from 'express';
import PhotoModel from '../models/Photos.js';

const router = express.Router();

router.post('/upload', async (req, res) => {
  console.log(req.body);

  try {
    const photo = new PhotoModel(req.body);

    await photo.save();
    res.send(photo);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const photos = await PhotoModel.find({});

    if (photos.length === 0) {
      throw new Error('No photos yet');
    }

    res.send(photos);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { router as photoRouter };
