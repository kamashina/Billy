import { useSelector } from 'react-redux';
import './Profile.css';

function Profile() {
  const nick = useSelector((state) => state.registration.nick);
  const count = useSelector((state) => state.registration.country);
  const logo = useSelector((state) => state.registration.avatar);
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
    </profile>
  );
} export default Profile;
