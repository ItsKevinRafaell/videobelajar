import React from 'react';
import Button from '../../ui/Button';

const ProfileSidebar = ({ activeMenu, setActiveMenu }) => {
  const menuItems = [
    { id: 'profile', label: 'Profile Saya' },
    { id: 'kelas', label: 'Kelas Saya' },
    { id: 'pesanan', label: 'Pesanan Saya' },
  ];

  return (
    <div className='col-span-1'>
      <h2 className='text-2xl font-bold poppins'>Ubah Profil</h2>
      <p className='text-gray-600 mb-6 dm-sans'>Ubah data diri anda</p>

      <div className='space-y-4 bg-white p-6 rounded-lg shadow-md'>
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={
              activeMenu === item.id ? 'profile_outline' : 'text-gray-300'
            }
            className='w-full p-4 text-center cursor-pointer'
            onClick={() => setActiveMenu(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProfileSidebar;
