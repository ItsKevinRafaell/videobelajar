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
      setError('Email atau kata sandi tidak valid. Silakan coba lagi.');
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (error) setError(''); // Menyembunyikan error saat input berubah
    if (id === 'email') setEmail(value);
    if (id === 'password') setPassword(value);
  };

  return (
    <form onSubmit={handleLogin}>
      <Input
        label='E-Mail'
        type='email'
        id='email'
        value={email}
        onChange={handleChange}
        required
      />
      <Input
        label='Kata Sandi'
        type='password'
        id='password'
        value={password}
        onChange={handleChange}
        required
      />
      {error && <div className='text-red-500 text-sm'>{error}</div>}
      <Button variant='primary' type='submit'>
        Masuk
      </Button>
    </form>
  );
};

export default LoginForm;
