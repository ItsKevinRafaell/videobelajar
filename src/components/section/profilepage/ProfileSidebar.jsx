import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import Button from '../../ui/Button';

const ProfileSidebar = ({ activeMenu, setActiveMenu, title, description }) => {
  const navigate = useNavigate(); // Initialize navigate function

  const menuItems = [
    { id: 'profile', label: 'Profile Saya', route: '/profile' },
    { id: 'kelas', label: 'Kelas Saya' }, // Example route
    { id: 'pesanan', label: 'Pesanan Saya' }, // Example route
    {
      id: 'user-management',
      label: 'Manajemen Pengguna',
      route: '/user-management',
    }, // Route for user management

    {
      id: 'course-management',
      label: 'Manajemen Kelas',
      route: '/course-management',
    }, // Route for course management
  ];

  const handleMenuClick = (route) => {
    navigate(route); // Navigate to the corresponding route
    setActiveMenu(route); // Set active menu to highlight the selected one
  };

  return (
    <div className='col-span-1'>
      <h2 className='text-2xl font-bold poppins'>{title}</h2>
      <p className='text-gray-600 mb-6 dm-sans'>{description}</p>

      <div className='space-y-4 bg-white p-6 rounded-lg shadow-md'>
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={
              activeMenu === item.id ? 'profile_outline' : 'text-gray-300'
            }
            className='w-full p-4 text-center cursor-pointer'
            onClick={() => handleMenuClick(item.route)} // Use navigate function to route
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProfileSidebar;
