import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../store/Reduxauth/login/action';
import './Profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.authorization.data.email);
  const nick = useSelector((state) => state.authorization.data.nickname);
  const avatar = useSelector((state) => state.authorization.data.avatarUrl);
  const Logout = () => {
    localStorage.removeItem('token');
    localStorage.setItem('authstatus', false);
    dispatch(setAuth('false'));
  };
  return (
    <div className="profile">
      <title>Профиль</title>
      <div className="prof">
        <h1>
          Профиль
          {' '}
          {email}
        </h1>
        <img
          src={avatar}
          alt="ava"
          className="avatarka"
        />
        <div className="data">
          <p>Данные аккаунта:</p>
          <ul>
            Почта:
            {email}
          </ul>
          <ul>
            Ник:
            {nick}
          </ul>
          <button type="button" className="but" onClick={Logout}>
            Выход
          </button>
        </div>
      </div>
    </div>
  );
}; export default Profile;
