import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async (e) => {
    try {
      const { data } = await axios.get('/photos');
      setPhotos(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <>
      <h1>Photos</h1>

      <ul>
        {photos.length > 0 ? (
          photos.map((photo) => {
            return <img src={photo.imgUrl} alt="img" />;
          })
        ) : (
          <h2>No photos yet...</h2>
        )}
      </ul>
    </>
  );
};

export default Photos;
