import express from 'express';
import PhotoModel from '../models/Photos.js';

const router = express.Router();

router.post('/upload', async (req, res) => {
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

router.get('/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const photos = await PhotoModel.find({ userOwner: _id });

    if (!photos) {
      return res.status(404).send();
    }

    res.send(photos);
  } catch (error) {
    res.status(500).send();
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const photo = await PhotoModel.findOneAndDelete({
      _id: req.params.id,
    });

    if (!photo) {
      res.status(404).send();
    }

    res.send(photo);
  } catch (e) {
    res.status(500).send();
  }
});

export { router as photoRouter };
