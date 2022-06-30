import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const nick = useSelector((state) => state.registration.nick);
  const logo = 'sun.png';

  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <span className="main">Проект №1</span>
      <NavLink className="login" to="/Profile">{nick}</NavLink>
    </header>
  );
} export default Header;
