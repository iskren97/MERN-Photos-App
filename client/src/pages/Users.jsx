import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (e) => {
    try {
      const { data } = await axios.get('/users');
      setUsers(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>

      <ul>
        {users.length > 0 ? (
          users.map((user) => {
            return <li>{user.email}</li>;
          })
        ) : (
          <h2>No users yet...</h2>
        )}
      </ul>
    </>
  );
};

export default Users;
