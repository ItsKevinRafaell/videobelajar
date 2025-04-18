import Button from './Button';

const GoogleButton = () => {
  return (
    <Button variant='outline' className='mt-4'>
      <img
        src='/assets/images/social-media/google-icon-logo-svgrepo-com.svg'
        alt='Google Logo'
        className='h-5 mr-2'
      />
      Daftar dengan Google
    </Button>
  );
};

export default GoogleButton;
