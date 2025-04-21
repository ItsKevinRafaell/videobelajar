import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import GoogleButton from '../components/ui/GoogleButton';
import { Navbar } from '../components/layout/Navbar';
import LoginForm from '../components/section/loginpage/LoginForm';

const Login = ({ loginUser }) => {
  return (
    <div className='min-h-screen bg-[#FFFDF3]'>
      <div className='flex flex-col min-h-screen items-center justify-center p-4'>
        <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
          <h2 className='text-2xl font-bold text-center poppins mb-2'>
            Masuk ke Akun
          </h2>
          <p className='text-center mb-6 dm-sans text-gray-500'>
            Yuk, lanjutin belajarmu di videobelajar.
          </p>

          <LoginForm loginUser={loginUser} />

          <Link to='/register'>
            <Button variant='secondary' className='mt-4'>
              Daftar
            </Button>
          </Link>

          <div className='divider-container mt-6'>
            <hr className='divider' />
            <span className='divider-text dm-sans'>atau</span>
            <hr className='divider' />
          </div>

          <GoogleButton />
        </div>
      </div>
    </div>
  );
};

export default Login;
