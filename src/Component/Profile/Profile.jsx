import './Profile.css';

function Profile(props) {
  const reg = props;
  const logo = reg.ava;
  const nick = reg.nickname;
  const count = reg.country;
  return (
    <profile className="profile">
      <h1>
        Профиль
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
