import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correctly import useNavigate
import Input from '../../ui/Input';
import Button from '../../ui/Button';

const LoginForm = ({ loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error message
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    const isLoggedIn = loginUser(email, password);

    if (isLoggedIn) {
      navigate('/'); // Redirect to homepage on success
    } else {
      setError('Invalid email or password. Please try again.'); // Set error message
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Input
        label='E-Mail'
        type='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        label='Kata Sandi'
        type='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <div className='text-red-500 text-sm'>{error}</div>}{' '}
      {/* Show error message */}
      <Button variant='primary' type='submit'>
        Masuk
      </Button>
    </form>
  );
};

export default LoginForm;
