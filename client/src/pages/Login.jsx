import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [_, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/users/login', {
        email,
        password,
      });

      console.log(response);
      setCookies('access_token', response.data.token);
      window.localStorage.setItem('userID', response.data.user._id);
      alert('Success');
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form
        label={'Login'}
        email={email}
        setEmail={handleEmailChange}
        password={password}
        setPassword={handlePasswordChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
