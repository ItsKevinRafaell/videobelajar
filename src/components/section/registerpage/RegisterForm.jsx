import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../ui/Input';
import PhoneInput from '../../ui/PhoneInput';
import Button from '../../ui/Button';

const RegisterForm = ({ createUser }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const newUser = {
      id: Date.now(), // Unique ID for the new user
      fullname,
      email,
      phone,
      password,
    };

    createUser(newUser); // Call the createUser function passed down from App.js
    navigate('/');
  };

  return (
    <form onSubmit={handleRegister}>
      <Input
        label='Nama Lengkap'
        type='text'
        id='fullname'
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        required
      />
      <Input
        label='E-Mail'
        type='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <PhoneInput
        label='No. HP'
        id='phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
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
      <Input
        label='Konfirmasi Kata Sandi'
        type='password'
        id='confirm-password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <a
        href='#'
        className='text-sm text-black hover:underline mb-4 block text-right dm-sans'
      >
        Lupa Password?
      </a>

      <Button variant='primary' type='submit'>
        Daftar
      </Button>
    </form>
  );
};

export default RegisterForm;
