import axios from 'axios';
import React, { useState } from 'react';
import useUser from '../hooks/useUser';

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState('');
  const user = useUser();

  const handleFileUpload = async (e) => {
    const img = e.target.files[0];
    const base64 = await covertToBase64(img);
    setImageUrl(base64);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post('/photos/upload', {
        imgUrl: imageUrl,
        userOwner: user._id,
      });
      console.log(resp);
    } catch (error) {}
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          type="file"
          name="img"
          id="img-upload"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

function covertToBase64(img) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(img);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

export default ImageUpload;
