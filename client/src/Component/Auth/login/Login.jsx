import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../store/Reduxauth/login/action';
import './Login.css';

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
        localStorage.setItem('token', response.data.token);
        dispatch(setAuth(true));
        localStorage.setItem('authstatus', true);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <login className="login">
        <h1 className="mess">Вход</h1>
        <input
        // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('email')}
          placeholder="Почта"
          className="inp1"
        />
        <input
        // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password')}
          placeholder="Пароль"
          type="password"
          className="inp2"
        />
        <input
          type="submit"
          className="inpsub"
        />
      </login>
    </form>
  );
}

export default Login;
