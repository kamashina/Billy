import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuth } from 'src/store/Reduxauth/action';
import { useAppSelector } from '../../hooks/useAppSelector';
import Navbar from '../Navbar/Navbar';
import './Header.css';


const Header: React.FC = () => {
  
const {auth, data}  = useAppSelector((state) => state.authorization)
const dispatch = useDispatch()
  const Logout = () => {
    localStorage.removeItem('token');
dispatch(setAuth(false))
  };
  return (
    <div className="header">
      <div className="ava">
        <Navbar />
      </div>
      <span className="project">Проект №1</span>
      {auth
        ? (null)
        : (
          <div className="group">
            <NavLink className="logout" to="/Reg">Регистрация</NavLink>
            <NavLink className="log" to="/Login">Вход</NavLink>
          </div>
        )}
    </div>
  );
}; export default Header;
