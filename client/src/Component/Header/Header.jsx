import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuth } from '../../store/Reduxauth/login/action';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import Weather from './Weather/Weather';

function Header() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.authorization.data.email);
  const logo = 'sun.png';
  const fsfk = JSON.parse(localStorage.getItem('authstatus'));
  const Logout = () => {
    localStorage.removeItem('token');
    localStorage.setItem('authstatus', false);
    dispatch(setAuth('false'));
  };
  return (
    <div className="header">
      <img src={logo} alt={logo} />
      <div className="one">
        <Navbar />
      </div>
      <span className="main">Проект №1</span>
      <div className="weather">
        <Weather />
      </div>
      {fsfk
        ? (
          <div className="group">
            <NavLink className="log" to="/Profile">{email}</NavLink>
            <button type="button" onClick={Logout} className="logbtn">Выйти</button>
          </div>
        )
        : (
          <div className="group">
            <NavLink className="logout" to="client/src/Component/Auth/reg/Reg.jsx">Регистрация</NavLink>
            <NavLink className="log" to="client/src/Component/Auth/login/Login.jsx">Вход</NavLink>
          </div>
        )}
    </div>
  );
} export default Header;
