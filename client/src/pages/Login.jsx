import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line
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

      setCookies('access_token', response.data.token);
      window.localStorage.setItem(
        'currentUser',
        JSON.stringify(response.data.user)
      );
      alert('Success');
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form
        label={'Login'}
        email={email}
        setEmail={handleEmailChange}
        password={password}
        setPassword={handlePasswordChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Login;
