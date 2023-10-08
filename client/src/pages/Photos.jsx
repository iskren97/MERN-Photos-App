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
                className="photo"
                key={photo._id}
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
