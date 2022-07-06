import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/"><div>Главное</div></NavLink>
      <NavLink to="/Profile"><div>Профиль</div></NavLink>
      <NavLink to="/Readfile"><div>Загрузка</div></NavLink>
      <NavLink to="/sorti"><div>Сортировка</div></NavLink>
      <NavLink to="/Posts"><div>Посты</div></NavLink>
      <NavLink to="/Product"><div>Товары</div></NavLink>

    </nav>
  );
} export default Navbar;
