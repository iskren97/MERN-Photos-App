import React, { useEffect, useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import axios from 'axios';
import useUser from '../hooks/useUser';

const Profile = () => {
  const [photos, setPhotos] = useState([]);
  const user = useUser();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/photos/${user._id}`)
      .then(({ data }) => setPhotos(data))
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handlePhotoDelete = (photoID) => {
    setIsLoading(true);
    axios
      .delete(`/photos/${photoID}`)
      .then(({ data }) => {
        setPhotos((prevPhotos) =>
          prevPhotos.filter((photo) => photo._id !== data._id)
        );
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <h1>Profile</h1>

      <h3>Upload a photo</h3>
      <ImageUpload />

      <h3 style={{ marginTop: '100px' }}>Uploaded Photos:</h3>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="profile-photo-container">
          {photos.length > 0 ? (
            photos.map((photo) => {
              return (
                <div key={photo._id} className="photo-inner-container">
                  <img className="photo" src={photo.imgUrl} alt="img" />

                  <button
                    onClick={() => handlePhotoDelete(photo._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    Delete
                  </button>
                </div>
              );
            })
          ) : (
            <p>You have no photos yet...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
