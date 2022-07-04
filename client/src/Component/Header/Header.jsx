import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const email = useSelector((state) => state.authorization.data.email);
  const logo = 'sun.png';

  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <span className="main">Проект №1</span>
      <NavLink className="login" to="/Profile">{email}</NavLink>
    </header>
  );
} export default Header;
