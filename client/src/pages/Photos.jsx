import React from 'react';
import useFetchData from '../hooks/useFetchData';

const Photos = () => {
  const { data, isFetching } = useFetchData('/photos');

  if (isFetching) {
    return <h1>Loading ...</h1>;
  }

  return (
    <>
      <h1>Photos</h1>

      <ul>
        {data?.length > 0 ? (
          data.map((photo) => {
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
          <h2>No photos yet...</h2>
        )}
      </ul>
    </>
  );
};

export default Photos;
