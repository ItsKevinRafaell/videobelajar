import { Link } from 'react-router-dom';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

const LoginForm = () => {
  return (
    <form>
      <Input label='E-Mail' type='email' id='email' required />
      <Input label='Kata Sandi' type='password' id='password' required />

      <a
        href='#'
        className='text-sm text-black hover:underline mb-4 block font-semibold text-right dm-sans'
      >
        Lupa Password?
      </a>

      <Link to='/'>
        <Button variant='primary'>Masuk</Button>
      </Link>
    </form>
  );
};
export default LoginForm;
