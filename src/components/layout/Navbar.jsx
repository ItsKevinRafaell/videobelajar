import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export const Navbar = ({ loggedInUser, logoutUser }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown menu visibility

  // Function to toggle the dropdown menu visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='bg-white p-4 shadow-lg'>
      <div className='flex justify-between items-center'>
        <Link to='/'>
          <img
            src='/assets/images/logo/logo.png'
            alt='Logo'
            className='w-32 md:w-40'
          />
        </Link>

        {loggedInUser ? (
          // Show logged-in user's name, "Kategori" menu, and avatar dropdown
          <div className='flex items-center space-x-8'>
            {/* "Kategori" menu */}
            <Link to='/category'>
              <Button
                variant='secondary'
                className='md:mx-4 text-sm md:text-base'
              >
                Kategori
              </Button>
            </Link>

            {/* Avatar icon with dropdown */}
            <div className='relative'>
              <button
                onClick={toggleDropdown}
                className='flex items-center space-x-2 focus:outline-none'
              >
                <img
                  src={
                    loggedInUser.avatar ||
                    '/assets/images/avatar/avatar-nav.png'
                  }
                  alt='Avatar'
                  className='w-12 h-12 rounded-md'
                />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className='absolute right-0 mt-2 bg-white border rounded shadow-md w-48 z-10'>
                  <ul>
                    <li>
                      <Link
                        to='/profile'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      >
                        Profil Saya
                      </Link>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      >
                        Kelas Saya
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      >
                        Pesanan Saya
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          logoutUser();
                          setDropdownOpen(false); // Close the dropdown after logout
                        }}
                        className='block w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-100'
                      >
                        Keluar
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Show login and register buttons for logged-out users
          <div className='flex items-center space-x-4'>
            <Link to='/login'>
              <Button
                variant='primary'
                className='md:mx-4 text-sm md:text-base'
              >
                Login
              </Button>
            </Link>
            <Link to='/register'>
              <Button
                variant='outline'
                className='md:mx-4 text-sm md:text-base'
              >
                Register
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export const LoggedOutNavbar = () => {
  return (
    <nav className='bg-white p-4 shadow-lg'>
      <div className='flex justify-between items-center'>
        <Link to='/'>
          <img
            src='/assets/images/logo/logo.png'
            alt='Logo'
            className='w-32 md:w-40'
          />
        </Link>
        <div className='flex items-center'>
          <Link to='/login'>
            <Button variant='primary' className='md:mx-4 text-sm md:text-base'>
              Login
            </Button>
          </Link>
          <Link to='/register'>
            <Button variant='outline' className='md:mx-4 text-sm md:text-base'>
              Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
