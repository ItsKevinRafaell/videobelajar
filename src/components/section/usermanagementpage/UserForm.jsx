import React from 'react';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

const UserForm = ({ formData, handleChange, handleSubmit, error, isEdit }) => {
  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div className='space-y-4'>
        <Input
          label='Nama Lengkap'
          type='text'
          id='name'
          value={formData.name}
          onChange={handleChange}
          required
          className='w-full p-3 border border-gray-300 rounded-md'
        />
        <Input
          label='E-Mail'
          type='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
          required
          className='w-full p-3 border border-gray-300 rounded-md'
        />
        <Input
          label='No. HP'
          type='text'
          id='phone'
          value={formData.phone}
          onChange={handleChange}
          required
          className='w-full p-3 border border-gray-300 rounded-md'
        />
        <Input
          label='Kata Sandi'
          type='password'
          id='password'
          value={formData.password}
          onChange={handleChange}
          required
          className='w-full p-3 border border-gray-300 rounded-md'
        />
        <Input
          label='Konfirmasi Kata Sandi'
          type='password'
          id='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className='w-full p-3 border border-gray-300 rounded-md'
        />
      </div>

      {error && <div className='text-red-500 text-sm'>{error}</div>}

      <Button
        variant='primary'
        type='submit'
        className='w-full py-3 bg-blue-500 text-white rounded-md'
      >
        {isEdit ? 'Perbarui Pengguna' : 'Tambah Pengguna'}
      </Button>
    </form>
  );
};

export default UserForm;
