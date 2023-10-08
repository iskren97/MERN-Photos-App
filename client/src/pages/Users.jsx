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

  console.log(users);

  return (
    <>
      <h1>Users</h1>

      <ul>
        {users.map((user) => {
          return <li>{user.email}</li>;
        })}
      </ul>
    </>
  );
};

export default Users;
