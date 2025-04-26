import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export const Navbar = ({ loggedInUser, logoutUser }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile or not
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Listen to resize events
    window.addEventListener('resize', checkMobile);

    // Check initially on mount
    checkMobile();

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close dropdown if the screen size changes to mobile
  useEffect(() => {
    if (isMobile) {
      setDropdownOpen(false); // Close dropdown on mobile
    }
  }, [isMobile]);

  return (
    <nav className='bg-white p-4 shadow-lg'>
      <div className='flex justify-between items-center mx-auto max-w-screen-xl'>
        <Link to='/'>
          <img
            src='/assets/images/logo/logo.png'
            alt='Logo'
            className='w-32 md:w-40'
          />
        </Link>

        {/* Mobile hamburger button */}
        <div className='md:hidden'>
          <button
            onClick={toggleMobileMenu}
            className='text-gray-600 focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-8 h-8'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>

        {/* Menu for large screens */}
        {loggedInUser ? (
          <div className='hidden md:flex items-center space-x-8'>
            <Link to='/category'>
              <Button
                variant='no_style'
                className='md:mx-4 text-sm md:text-base'
              >
                Kategori
              </Button>
            </Link>

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

              {dropdownOpen && (
                <div className='absolute right-0 mt-2 bg-white border rounded shadow-md w-48 z-50'>
                  <ul>
                    <li>
                      <Link
                        to='/profile'
                        className='block px-4 dm-sans  py-2 text-sm text-gray-700 hover:bg-gray-100'
                      >
                        Profil Saya
                      </Link>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 dm-sans  py-2 text-sm text-gray-700 hover:bg-gray-100'
                      >
                        Kelas Saya
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 dm-sans  py-2 text-sm text-gray-700 hover:bg-gray-100'
                      >
                        Pesanan Saya
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          logoutUser();
                          setDropdownOpen(false);
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
          <div className='hidden md:flex items-center space-x-4'>
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className='md:hidden'>
          <ul className='space-y-4 p-4'>
            {loggedInUser ? (
              <>
                <li>
                  <Link
                    to='/category'
                    className='block px-4 dm-sans  py-2 text-sm text-gray-700 hover:bg-gray-100'
                  >
                    Kategori
                  </Link>
                </li>
                <li>
                  <Link
                    to='/profile'
                    className='block px-4 dm-sans  py-2 text-sm text-gray-700 hover:bg-gray-100'
                  >
                    Profil Saya
                  </Link>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 dm-sans  py-2 text-sm text-gray-700 hover:bg-gray-100'
                  >
                    Kelas Saya
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block px-4 dm-sans  py-2 text-sm text-gray-700 hover:bg-gray-100'
                  >
                    Pesanan Saya
                  </a>
                </li>

                <li>
                  <button
                    onClick={() => {
                      logoutUser();
                      setMobileMenuOpen(false);
                    }}
                    className='block w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-100'
                  >
                    Keluar
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to='/login'
                    className='block px-4 dm-sans  py-2 text-sm text-gray-700 hover:bg-gray-100'
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to='/register'
                    className='block px-4 dm-sans  py-2 text-sm text-gray-700 hover:bg-gray-100'
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
