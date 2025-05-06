import React from 'react';
import { useSelector } from 'react-redux';
import useUserManagement from '../hooks/useUserManagement';
import UserForm from '../components/section/usermanagementpage/UserForm';
import UserList from '../components/section/usermanagementpage/UserList';
import ProfileSidebar from '../components/section/profilepage/ProfileSidebar';

const UserManagementPage = () => {
  const users = useSelector((state) => state.userData.users);
  const loading = useSelector((state) => state.userData.loading);
  const error = useSelector((state) => state.userData.error);

  const {
    formData,
    handleChange,
    handleSaveUser,
    handleDeleteUser,
    handleSelectUserForEdit,
    selectedUser,
    resetForm,
  } = useUserManagement();

  return (
    <div className='bg-[#FFFDF3] p-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
        {/* Sidebar */}
        <ProfileSidebar
          activeMenu='user-management'
          setActiveMenu={() => {}}
          title='Manajemen Pengguna'
          description='Manajemen Pengguna'
        />

        {/* Content Area */}
        <div className='col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-md'>
          <h1 className='text-3xl font-semibold text-center mb-6'>
            {selectedUser ? 'Perbarui Pengguna' : 'Tambah Pengguna'}
          </h1>

          {/* User Form */}
          <UserForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSaveUser}
            error={error}
            isEdit={selectedUser}
          />

          {/* Reset form button */}
          {selectedUser && (
            <button
              onClick={resetForm}
              className='mt-4 w-full py-2 bg-gray-500 text-white rounded-md'
            >
              Batal Edit
            </button>
          )}

          {loading && (
            <div className='text-blue-500 text-center mt-6'>Memuat data...</div>
          )}

          <h2 className='text-2xl font-semibold text-center mt-12'>
            Daftar Pengguna
          </h2>

          {/* User List */}
          {loading ? (
            <div className='text-center text-gray-500'>
              Memuat data pengguna...
            </div>
          ) : (
            <UserList
              users={users}
              handleSelectUserForEdit={handleSelectUserForEdit}
              handleDeleteUser={handleDeleteUser}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;
