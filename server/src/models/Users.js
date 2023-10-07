import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  uploadedPhotos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'photos',
    },
  ],
});

const UserModel = mongoose.model('users', userSchema);

export default UserModel;
