import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export const Navbar = () => {
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
      </div>
    </nav>
  );
};

export const LoggedOutNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-white shadow-lg p-4 md:p-6'>
      <div className='flex items-center justify-between flex-wrap'>
        <Link to='/'>
          <img
            src='/assets/images/logo/logo.png'
            alt='Logo'
            className='w-32 md:w-40'
          />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden p-2 focus:outline-none'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:w-auto mt-2 md:mt-0`}
        >
          <ul className='flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 text-center md:text-left xl:items-center lg:items-center justify-center md:justify-center'>
            <li>
              <Link
                to='/category'
                className='text-gray-500 font-semibold dm-sans text-sm md:text-base'
              >
                Kategori
              </Link>
            </li>
            <li>
              <Link to='/login'>
                <Button
                  variant='primary'
                  className='md:mx-4 text-sm md:text-base'
                >
                  Login
                </Button>
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <Button
                  variant='outline'
                  className='md:mx-4 text-sm md:text-base'
                >
                  Register
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
