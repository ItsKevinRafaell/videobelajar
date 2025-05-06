import React from 'react';

const UserList = ({ users, handleSelectUserForEdit, handleDeleteUser }) => {
  return (
    <div className='mt-6 space-y-4'>
      {users.length > 0 ? (
        users.map((user) => (
          <div
            key={user.id}
            className='bg-gray-50 p-4 rounded-lg shadow-md flex justify-between items-center'
          >
            <div>
              <div className='text-lg font-medium'>{user.name}</div>
              <div className='text-sm text-gray-500'>{user.email}</div>
            </div>
            <div className='space-x-4'>
              <button
                onClick={() => handleSelectUserForEdit(user)}
                className='px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-400'
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteUser(user.id)}
                className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400'
              >
                Hapus
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className='text-center text-gray-500'>Data tidak tersedia</p>
      )}
    </div>
  );
};

export default UserList;
