import { useSelector, useDispatch } from 'react-redux';
import { setParol } from '../../store/Registration/action';
import './Profile.css';

function Profile() {
  const nick = useSelector((state) => state.registration.nick);
  const count = useSelector((state) => state.registration.country);
  const logo = useSelector((state) => state.registration.avatar);
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(setParol(false));
  };
  return (
    <profile className="profile">
      <h1>
        Профиль
        {' '}
        {nick}
      </h1>
      <img src={logo} alt="ava" />
      <p>Данные аккаунта:</p>
      <ul>
        Логин:
        {nick}
      </ul>
      <ul>
        Страна:
        {count}
      </ul>
      <button type="button" className="but" onClick={Logout}>
        Выход
      </button>
    </profile>
  );
} export default Profile;
