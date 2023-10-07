import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>App Name</h1>

      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/photos'}>Photos</Link>
        <Link to={'/users'}>Users</Link>
        <Link to={'/Contacts'}>Contacts</Link>
      </div>

      <div>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
      </div>
    </div>
  );
};

export default Header;
