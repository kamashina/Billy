import * as React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setAuth } from '../../store/Reduxauth/action';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header: React.FC = () => {
    const { auth } = useAppSelector((state) => state.authorization);
    const dispatch = useDispatch();
    const Logout = () => {
        localStorage.removeItem('token');
        dispatch(setAuth(false));
    };
    return (
        <div className="header">
            <div className="ava">
                <Navbar />
            </div>
            <span className="project">Проект №1</span>
            {auth ? null : (
                <div className="group">
                    <NavLink className="logout" to="/Reg">
                        Регистрация
                    </NavLink>
                    <NavLink className="log" to="/Login">
                        Вход
                    </NavLink>
                </div>
            )}
        </div>
    );
};
export default Header;
