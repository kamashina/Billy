import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuth } from '../../store/Reduxauth/login/action';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.authorization.data.email);
  const avatar = useSelector((state) => state.authorization.data.avatarUrl);
  const fsfk = JSON.parse(localStorage.getItem('authstatus'));
  const Logout = () => {
    localStorage.removeItem('token');
    localStorage.setItem('authstatus', false);
    dispatch(setAuth('false'));
  };
  return (
    <div className="header">
      <div className="one">
        <Navbar />
      </div>
      <span className="main">Проект №1</span>
      {fsfk
        ? (
          <div className="group">
            <img
              src={avatar}
              alt="ava"
              className="ava"
            />
            <NavLink className="log" to="/Profile">{email}</NavLink>
            <button type="button" onClick={Logout} className="logbtn">Выйти</button>
          </div>
        )
        : (
          <div className="group">
            <NavLink className="logout" to="/Reg.js">Регистрация</NavLink>
            <NavLink className="log" to="/Login.js">Вход</NavLink>
          </div>
        )}
    </div>
  );
}; export default Header;
