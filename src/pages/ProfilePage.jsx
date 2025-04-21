import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from '../components/ui/PhoneInput'; // Assuming you have PhoneInput component
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const ProfilePage = ({ user, updateUser, deleteUser }) => {
  const [fullname, setFullname] = useState(user.fullname);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [activeMenu, setActiveMenu] = useState('profile'); // To manage active card menu
  const navigate = useNavigate(); // Initialize navigate hook

  const handleUpdate = () => {
    const updatedUser = { ...user, fullname, email, phone };
    updateUser(updatedUser);
  };

  const handleDelete = () => {
    deleteUser(user.id);
    navigate('/login'); // Redirect to login page after deleting the account
  };

  return (
    <div className='min-h-screen bg-[#FFFDF3] p-6'>
      <div className='grid grid-cols-3 gap-6'>
        {/* Left Section (30% Width) */}
        <div className='col-span-1'>
          {/* Title and Subtitle */}
          <h2 className='text-2xl font-bold poppins'>Ubah Profil</h2>
          <p className='text-gray-600 mb-6 dm-sans'>Ubah data diri anda</p>

          {/* Menu Cards */}
          <div className='space-y-4 bg-white p-6 rounded-lg shadow-md'>
            <Button
              variant={
                activeMenu === 'profile' ? 'profile_outline' : 'text-gray-300'
              }
              className={`w-full p-4 text-center cursor-pointer`}
              onClick={() => setActiveMenu('profile')}
            >
              Profile Saya
            </Button>

            <Button
              variant={
                activeMenu === 'kelas' ? 'profile_outline' : 'text-gray-300'
              }
              className={`w-full p-4 text-center cursor-pointer`}
              onClick={() => setActiveMenu('kelas')}
            >
              Kelas Saya
            </Button>

            <Button
              variant={
                activeMenu === 'pesanan' ? 'profile_outline' : 'text-gray-300'
              }
              className={`w-full p-4 text-center cursor-pointer`}
              onClick={() => setActiveMenu('pesanan')}
            >
              Pesanan Saya
            </Button>
          </div>
        </div>

        {/* Right Section (70% Width) */}
        <div className='col-span-2 bg-white p-6 rounded-lg shadow-md'>
          {/* First Row: Avatar and User Info */}
          <div className='grid grid-cols-6  mb-6'>
            {/* Left Column: Avatar (30% width) */}
            <div className='flex justify-center items-center col-span-1'>
              <img
                src={user.avatar || '/assets/images/avatar/avatar-nav.png'}
                alt='Avatar'
                className='w-full max-w-[100px] h-auto rounded-md object-cover'
              />
            </div>
            {/* Right Column: User Info (70% width) */}
            <div className='space-y-1 col-span-2'>
              <h3 className='text-xl font-semibold poppins'>{user.fullname}</h3>
              <p className='text-gray-600 dm-sans'>{user.email}</p>
              <p className='text-orange-500 font-bold dm-sans'>
                Ganti Foto Profil
              </p>
            </div>
          </div>

          {/* Second Row: Edit User Info Form */}
          <div className='flex flex-row gap-2 w-full'>
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
          </div>
          <div className='flex flex-row gap-2 w-full mt-4'>
            <Button variant='primary' onClick={handleUpdate}>
              Simpan Perubahan
            </Button>
            <Button variant='danger' onClick={handleDelete}>
              Hapus Akun
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
