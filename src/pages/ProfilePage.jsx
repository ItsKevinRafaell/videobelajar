import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import ProfileSidebar from '../components/section/profilepage/ProfileSidebar';
import ProfileHeader from '../components/section/profilepage/ProfileHeader';
import ProfileForm from '../components/section/profilepage/ProfileForm';

const ProfilePage = ({ user, updateUser, deleteUser }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('profile');

  const handleUpdate = () => {
    const updatedUser = { ...user, name, email, phone };
    updateUser(updatedUser);
  };

  const handleDelete = () => {
    deleteUser(user.id);
    navigate('/login');
  };

  return (
    <div className='bg-[#FFFDF3] p-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
        <ProfileSidebar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          title={'Ubah Profil'}
          description={'Ubah data diri anda'}
        />

        <div className='col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-md'>
          <ProfileHeader user={user} />

          <ProfileForm
            name={name}
            email={email}
            phone={phone}
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
