import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store/Reduxauth/login/action';
import './Profile.css';

function Profile() {
  const email = useSelector((state) => state.authorization.data.email);
  const nick = useSelector((state) => state.authorization.data.nickname);
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(setUser(null));
  };
  return (
    <profile className="profile">
      <h1>
        Профиль
        {' '}
        {email}
      </h1>
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
    </profile>
  );
} export default Profile;
