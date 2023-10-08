import React, { useEffect, useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import axios from 'axios';
import useUser from '../hooks/useUser';

const Profile = () => {
  const [photos, setPhotos] = useState([]);
  const user = useUser();

  useEffect(() => {
    axios.get(`/photos/${user._id}`).then(({ data }) => setPhotos(data));
  }, []);

  return (
    <div>
      <h1>Profile</h1>

      <h3>Upload a photo</h3>
      <ImageUpload />

      <br />
      <br />
      <br />
      <br />
      <br />

      <h3>Uploaded Photos:</h3>
      {photos.length > 0 ? (
        photos.map((photo) => {
          return (
            <img
              key={photo._id}
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'contain',
              }}
              src={photo.imgUrl}
              alt="img"
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
