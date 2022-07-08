import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const fsfk = JSON.parse(localStorage.getItem('authstatus'));
  return (
    <div>
      {(fsfk) ? (
        <div>
          <nav className="nav">
            <div className="dropdown">
              <button type="button" className="dropbtn">Меню</button>
              <div className="dropdown-content">
                <NavLink to="/">Главное</NavLink>
                <NavLink to="/Profile">Профиль</NavLink>
                <NavLink to="/Readfile">Загрузка</NavLink>
                <NavLink to="/sorti">Сортировка</NavLink>
                <NavLink to="/Posts">Посты</NavLink>
                <NavLink to="/Product">Товары</NavLink>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
} export default Navbar;
