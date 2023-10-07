import React, { useState } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/users/register', {
        name,
        email,
        password,
      });

      alert('Registration completed!');
      navigate('/login');
    } catch (error) {
      alert('Error!');
    }
  };

  return (
    <>
      <Form
        label={'Register'}
        email={email}
        setEmail={handleEmailChange}
        name={name}
        setName={handleNameChange}
        password={password}
        setPassword={handlePasswordChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Register;
