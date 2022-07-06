import axios from 'axios';
import { useForm } from 'react-hook-form';
import './Login.css';

function Login() {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (user) => {
    axios
      .post('http://localhost:1983/auth/login', {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
      });
  };
  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('email')}
        placeholder="Почта"
      />
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('password')}
        placeholder="Пароль"
        type="password"
      />
      <input
        type="submit"
      />
    </form>
  );
}

export default Login;