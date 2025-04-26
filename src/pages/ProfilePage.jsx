import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from '../components/ui/PhoneInput';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Footer from '../components/layout/Footer';

const ProfilePage = ({ user, updateUser, deleteUser }) => {
  const [fullname, setFullname] = useState(user.fullname);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [activeMenu, setActiveMenu] = useState('profile');
  const navigate = useNavigate();

  const handleUpdate = () => {
    const updatedUser = { ...user, fullname, email, phone };
    updateUser(updatedUser);
  };

  const handleDelete = () => {
    deleteUser(user.id);
    navigate('/login');
  };

  return (
    <>
      <div className='bg-[#FFFDF3] p-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
          <div className='col-span-1'>
            <h2 className='text-2xl font-bold poppins'>Ubah Profil</h2>
            <p className='text-gray-600 mb-6 dm-sans'>Ubah data diri anda</p>

            <div className='space-y-4 bg-white p-6 rounded-lg shadow-md'>
              <Button
                variant={
                  activeMenu === 'profile' ? 'profile_outline' : 'text-gray-300'
                }
                className='w-full p-4 text-center cursor-pointer'
                onClick={() => setActiveMenu('profile')}
              >
                Profile Saya
              </Button>

              <Button
                variant={
                  activeMenu === 'kelas' ? 'profile_outline' : 'text-gray-300'
                }
                className='w-full p-4 text-center cursor-pointer'
                onClick={() => setActiveMenu('kelas')}
              >
                Kelas Saya
              </Button>

              <Button
                variant={
                  activeMenu === 'pesanan' ? 'profile_outline' : 'text-gray-300'
                }
                className='w-full p-4 text-center cursor-pointer'
                onClick={() => setActiveMenu('pesanan')}
              >
                Pesanan Saya
              </Button>
            </div>
          </div>

          <div className='col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-md'>
            <div className='grid grid-cols-1 md:grid-cols-6 mb-6 gap-4'>
              <div className='flex justify-center items-center col-span-1'>
                <img
                  src={user.avatar || '/assets/images/avatar/avatar-nav.png'}
                  alt='Avatar'
                  className='w-full max-w-[100px] h-auto rounded-md object-cover'
                />
              </div>
              <div className='space-y-1 col-span-1 md:col-span-2'>
                <h3 className='text-xl font-semibold poppins'>
                  {user.fullname}
                </h3>
                <p className='text-gray-600 dm-sans'>{user.email}</p>
                <p className='text-orange-500 font-bold dm-sans'>
                  Ganti Foto Profil
                </p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-2 w-full items-center'>
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
            <div className='flex flex-col md:flex-row gap-2 w-full mt-4'>
              <Button
                variant='primary'
                onClick={handleUpdate}
                className='xl:w-full lg:w-full md:w-auto'
              >
                Simpan Perubahan
              </Button>
              <Button
                variant='danger'
                onClick={handleDelete}
                className='xl:w-full lg:w-full md:w-auto'
              >
                Hapus Akun
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
