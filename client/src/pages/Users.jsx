import React from 'react';
import useFetchData from '../hooks/useFetchData';

const Users = () => {
  const { data, isFetching } = useFetchData('/users');

  if (isFetching) {
    return <h1>Loading ...</h1>;
  }

  return (
    <>
      <h1>Users</h1>

      <ul>
        {data?.length > 0 ? (
          data.map((user) => {
            return <li key={user._id}>{user.email}</li>;
          })
        ) : (
          <h2>No users yet...</h2>
        )}
      </ul>
    </>
  );
};

export default Users;
