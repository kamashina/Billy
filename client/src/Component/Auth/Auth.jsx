import { NavLink } from 'react-router-dom';

function Auth() {
  return (
    <div>
      <NavLink to="client/src/Component/Auth/reg/Reg.jsx">Регистрация</NavLink>
      <NavLink to="client/src/Component/Auth/login/Login.jsx">Вход</NavLink>
    </div>
  );
} export default Auth;
