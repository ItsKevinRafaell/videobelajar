import Input from '../../ui/Input';
import PhoneInput from '../../ui/PhoneInput';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <form>
      <Input label='Nama Lengkap' type='text' id='fullname' required />
      <Input label='E-Mail' type='email' id='email' required />
      <PhoneInput label='No. HP' id='phone' required />
      <Input label='Kata Sandi' type='password' id='password' required />
      <Input
        label='Konfirmasi Kata Sandi'
        type='password'
        id='confirm-password'
        required
      />
      <a
        href='#'
        className='text-sm text-black hover:underline mb-4 block text-right dm-sans'
      >
        Lupa Password?
      </a>
      <Link to='/'>
        <Button variant='primary'>Daftar</Button>
      </Link>
    </form>
  );
};

export default RegisterForm;
