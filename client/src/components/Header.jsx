import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Header = () => {
  const [cookies, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCookies('access_token', '');
    window.localStorage.removeItem('currentUser');
    navigate('/login');
  };

  console.log(cookies);

  return (
    <div className="header">
      <h1>App Name</h1>

      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/photos'}>Photos</Link>
        <Link to={'/users'}>Users</Link>
        <Link to={'/Contacts'}>Contacts</Link>
      </div>

      {!cookies.access_token ? (
        <div>
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Register</Link>
        </div>
      ) : (
        <div>
          <Link to={'/profile'}>My Profile</Link>
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
