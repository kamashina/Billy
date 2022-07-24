import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { setAuth } from 'src/store/Reduxauth/action';
import './Navbar.css';

const Navbar: React.FC = () => {
  const dispatch = useDispatch()
  const {auth, data} = useAppSelector((state) => state.authorization);

  const Logout = () => {
    localStorage.removeItem('token');
dispatch(setAuth(false))
  };
  

  return (
    <div>
      {(auth) ? (
        <div>
          <div className="nav">
            <div className="dropdown">
              <a type="button"><img
              src={data.avatarUrl}
              alt="ava"
              className="imgmenu"
            /></a>
              <div className="dropdown-content">
                <NavLink to="/">Главное</NavLink>
                <NavLink to="/News">Новости</NavLink>
                <NavLink to="/Posts">Диалог</NavLink>
                <NavLink to="/Video">Видео</NavLink>
                <NavLink to="/Profile">{data.email}</NavLink>
                <a type="button" onClick={Logout}>Выйти</a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}; export default Navbar;
