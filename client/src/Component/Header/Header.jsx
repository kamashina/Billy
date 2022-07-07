import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const email = useSelector((state) => state.authorization.data.email);
  const logo = 'sun.png';
  const fsfk = JSON.parse(localStorage.getItem('authstatus'));

  return (
    <header className="header">
      <img src={logo} alt={logo} />
      {fsfk
        ? <NavLink className="logout" to="/Profile">{email}</NavLink>
        : (
          <div>
            <NavLink to="client/src/Component/Auth/reg/Reg.jsx">Регистрация</NavLink>
            <NavLink className="login" to="client/src/Component/Auth/login/Login.jsx">Вход</NavLink>
          </div>
        )}
      <span className="main">Проект №1</span>
    </header>
  );
} export default Header;
