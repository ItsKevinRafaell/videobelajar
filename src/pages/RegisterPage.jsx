import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/section/registerpage/RegisterForm';
import Button from '../components/ui/Button';
import Divider from '../components/ui/Divider';
import GoogleButton from '../components/ui/GoogleButton';
import RegisterHeader from '../components/section/registerpage/RegisterHeader';

const RegisterPage = ({ createUser }) => {
  return (
    <div className='min-h-screen bg-[#FFFDF3]'>
      <div className='flex flex-col min-h-screen items-center justify-center p-4'>
        <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
          <RegisterHeader />

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
