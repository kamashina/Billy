import { NavLink } from 'react-router-dom';
import Login from './login/Login';
import Reg from './reg/Reg';

function Auth() {
  return (
    <div>
      <NavLink to="./reg">Регистрация</NavLink>
      <Reg />
      <NavLink to="./login">Вход</NavLink>
      <Login />
    </div>
  );
} export default Auth;
