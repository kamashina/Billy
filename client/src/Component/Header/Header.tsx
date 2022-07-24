
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAction } from 'src/hooks/useAction';
import { useAppSelector } from '../../hooks/useAppSelector';
import Navbar from '../Navbar/Navbar';
import './Header.css';


const Header: React.FC = () => {
  
const {auth, data}  = useAppSelector((state) => state.authorization)

  const Logout = () => {
    localStorage.removeItem('token');
  };
  return (
    <div className="header">
      <div className="one">
        <Navbar />
      </div>
      <span className="project">Проект №1</span>
      {auth
        ? (
          <div className="group">
            <img
              src={data.avatarUrl}
              alt="ava"
              className="ava"
            />
            <NavLink className="log" to="/Profile">{data.email}</NavLink>
            <button type="button" onClick={Logout} className="logbtn">Выйти</button>
          </div>
        )
        : (
          <div className="group">
            <NavLink className="logout" to="/Reg">Регистрация</NavLink>
            <NavLink className="log" to="/Login">Вход</NavLink>
          </div>
        )}
    </div>
  );
}; export default Header;
