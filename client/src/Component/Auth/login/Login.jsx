import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/Reduxauth/login/action';

function Login() {
  const dispatch = useDispatch();
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
        dispatch(setUser(response.data));
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Вход</h1>
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
      <input type="submit" />
    </form>
  );
}

export default Login;
