import React from 'react';

const Form = ({
  label,
  email,
  setEmail,
  name,
  setName,
  password,
  setPassword,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h2>{label}</h2>

        {label === 'Register' && (
          <>
            <label htmlFor="name">Name</label>
            <input
              placeholder="John Doe"
              type="text"
              id="name"
              value={name}
              onChange={setName}
            />
          </>
        )}

        <label htmlFor="email">Email</label>
        <input
          placeholder="example@email.com"
          type="text"
          id="email"
          value={email}
          onChange={setEmail}
        />

        <label htmlFor="password">Password</label>
        <input
          placeholder="password"
          type="password"
          id="password"
          value={password}
          onChange={setPassword}
        />
        <button disabled={!email || !password} type="submit">
          {label}
        </button>
      </form>
    </>
  );
};

export default Form;
