import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/Main"><div>Главное</div></NavLink>
      <NavLink to="/Profile"><div>Профиль</div></NavLink>
      <NavLink to="/Readfile"><div>Загрузка</div></NavLink>
      <NavLink to="/sorti"><div>Сортировка</div></NavLink>
    </nav>
  );
} export default Navbar;
