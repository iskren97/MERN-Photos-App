import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Photos from './pages/Photos';
import Users from './pages/Users';
import Contacts from './pages/Contacts';
import Protected from './components/Protected';
import { useCookies } from 'react-cookie';

const App = () => {
  const [cookies, _] = useCookies(['access_token']);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <Protected isLoggedIn={!!cookies.access_token}>
                <Profile />
              </Protected>
            }
          />
          <Route path="/photos" element={<Photos />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
