import React from 'react';
import Input from '../../ui/Input';
import PhoneInput from '../../ui/PhoneInput';
import Button from '../../ui/Button';

const ProfileForm = ({
  name,
  email,
  phone,
  setName,
  setEmail,
  setPhone,
  handleUpdate,
  handleDelete,
}) => {
  return (
    <>
      <div className='flex flex-col md:flex-row gap-2 w-full items-center'>
        <Input
          label='Nama Lengkap'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          label='E-Mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <PhoneInput
          label='No. HP'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className='flex flex-col md:flex-row gap-2 w-full mt-4'>
        <Button onClick={handleUpdate} variant='primary'>
          Simpan Perubahan
        </Button>
        <Button onClick={handleDelete} variant='danger'>
          Hapus Akun
        </Button>
      </div>
    </>
  );
};

export default ProfileForm;
