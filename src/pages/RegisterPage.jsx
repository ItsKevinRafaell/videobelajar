import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import RegisterForm from '../components/section/registerpage/RegisterForm';
import Button from '../components/ui/Button';
import Divider from '../components/ui/Divider';
import GoogleButton from '../components/ui/GoogleButton';

const RegisterPage = ({ createUser }) => {
  return (
    <div className='min-h-screen bg-[#FFFDF3]'>
      <div className='flex flex-col min-h-screen items-center justify-center p-4'>
        <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
          <h2 className='text-2xl font-bold text-center poppins mb-2'>
            Pendaftaran Akun
          </h2>
          <p className='text-center mb-6 dm-sans text-gray-500'>
            Yuk, daftarkan akunmu sekarang juga!
          </p>

          <RegisterForm createUser={createUser} />

          <Link to='/login'>
            <Button variant='secondary' className='mt-4' as='a' href='/login'>
              Masuk
            </Button>
          </Link>

          <Divider />

          <GoogleButton />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
