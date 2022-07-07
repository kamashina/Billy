import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Header.css';

function Header() {
  const email = useSelector((state) => state.authorization.data.email);
  const logo = 'sun.png';
  const fsfk = JSON.parse(localStorage.getItem('authstatus'));

  return (
    <header className="header">
      <img src={logo} alt={logo} />
      <span className="main">Проект №1</span>
      {fsfk
        ? (
          <div>
            <NavLink className="log" to="/Profile">{email}</NavLink>
            <Navbar />
          </div>
        )
        : (
          <div>
            <NavLink className="logout" to="client/src/Component/Auth/reg/Reg.jsx">Регистрация</NavLink>
            <NavLink className="log" to="client/src/Component/Auth/login/Login.jsx">Вход</NavLink>
          </div>
        )}
    </header>
  );
} export default Header;
