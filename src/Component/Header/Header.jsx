import { NavLink } from 'react-router-dom';
import './Header.css';

function Header(props) {
  const reg = props;
  const nick = reg.name;
  const logo = 'sun.png';

  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <span className="main">Проект №1</span>
      <NavLink className="login" to="/Profile">{nick}</NavLink>
    </header>
  );
} export default Header;
