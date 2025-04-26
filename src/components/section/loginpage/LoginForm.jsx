import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

const LoginForm = ({ loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const isLoggedIn = loginUser(email, password);

    if (isLoggedIn) {
      navigate('/');
    } else {
      setError('Invalid email or password. Please try again.');
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
      <Button variant='primary' type='submit'>
        Masuk
      </Button>
    </form>
  );
};

export default LoginForm;
