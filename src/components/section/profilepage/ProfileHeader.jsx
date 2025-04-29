import React from 'react';

const ProfileHeader = ({ user }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-6 mb-6 gap-4'>
      <div className='flex justify-center items-center col-span-1'>
        <img
          src={user.avatar || '/assets/images/avatar/avatar-nav.png'}
          alt='Avatar'
          className='w-full max-w-[100px] h-auto rounded-md object-cover'
        />
      </div>
      <div className='space-y-1 col-span-1 md:col-span-2'>
        <h3 className='text-xl font-semibold poppins'>{user.name}</h3>
        <p className='text-gray-600 dm-sans'>{user.email}</p>
        <p className='text-orange-500 font-bold dm-sans cursor-pointer'>
          Ganti Foto Profil
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
