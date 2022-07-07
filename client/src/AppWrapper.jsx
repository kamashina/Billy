import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import App from './App';
import instance from './axios';
import Auth from './Component/Auth/Auth';
import { setUser } from './store/Reduxauth/login/action';

function AppWrapper() {
  const dispatch = useDispatch();
  const fsfk = useSelector((state) => state.authorization.auth);
  const token = localStorage.getItem('token');
  useEffect(() => {
    const userData = () => {
      instance.get('/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          dispatch(setUser(response.data));
        });
    };
    userData();
  }, [fsfk]);

  return (
    <div>
      {!fsfk ? <Auth /> : <App />}
    </div>
  );
} export default AppWrapper;
