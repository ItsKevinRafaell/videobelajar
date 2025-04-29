import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../ui/Input';
import PhoneInput from '../../ui/PhoneInput';
import Button from '../../ui/Button';

const RegisterForm = ({ createUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Kata sandi tidak cocok. Silakan coba lagi.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Email tidak valid');
      return;
    }

    const newUser = {
      id: Date.now(),
      ...formData,
    };

    createUser(newUser);
    navigate('/');
  };

  return (
    <form onSubmit={handleRegister}>
      <Input
        label='Nama Lengkap'
        type='text'
        id='name'
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        label='E-Mail'
        type='email'
        id='email'
        value={formData.email}
        onChange={handleChange}
        required
      />
      <PhoneInput
        label='No. HP'
        id='phone'
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <Input
        label='Kata Sandi'
        type='password'
        id='password'
        value={formData.password}
        onChange={handleChange}
        required
      />
      <Input
        label='Konfirmasi Kata Sandi'
        type='password'
        id='confirmPassword'
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      {error && <div className='text-red-500 text-sm'>{error}</div>}
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
