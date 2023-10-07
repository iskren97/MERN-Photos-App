import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async (e) => {
    try {
      const { data } = await axios.get('/photos');
      console.log(data);
      setPhotos(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Photos</h1>

      <ul>
        {photos.map((photo) => {
          return <img src={photo.imgUrl} alt="" srcset="" />;
        })}
      </ul>
    </div>
  );
};

export default Photos;
