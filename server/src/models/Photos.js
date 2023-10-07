import mongoose from 'mongoose';

const photosSchema = new mongoose.Schema({
  imgUrl: { type: String },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
});

const PhotoModel = mongoose.model('photos', photosSchema);

export default PhotoModel;
