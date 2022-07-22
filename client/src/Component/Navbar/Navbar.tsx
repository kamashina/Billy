import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import './Navbar.css';

const Navbar: React.FC = () => {
  
  const {auth} = useAppSelector((state) => state.authorization);

  return (
    <div>
      {(auth) ? (
        <div>
          <div className="nav">
            <div className="dropdown">
              <button type="button" className="dropbtn">Меню</button>
              <div className="dropdown-content">
                <NavLink to="/">Главное</NavLink>
                <NavLink to="/Profile">Профиль</NavLink>
                <NavLink to="/News">Новости</NavLink>
                <NavLink to="/Posts">Диалог</NavLink>
                <NavLink to="/Readfile">Загрузка</NavLink>
                <NavLink to="/sorti">Сортировка</NavLink>
                <NavLink to="/Product">Товары</NavLink>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}; export default Navbar;
