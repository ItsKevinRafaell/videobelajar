import { React, useState } from 'react';
import { Link } from 'react-router-dom';

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
      </div>
    </nav>
  );
};

export const LoggedInNavbar = () => {
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
          <ul className='md:flex items-center space-x-4'>
            <li>
              <Link
                to='/category'
                className='text-gray-500 font-semibold dm-sans text-sm md:text-base'
              >
                Kategori
              </Link>
            </li>
            <li>
              <img
                src='/assets/images/avatar/avatar-nav.png'
                alt='Avatar'
                className='w-8 h-8 md:w-11 md:h-11 rounded-md'
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
