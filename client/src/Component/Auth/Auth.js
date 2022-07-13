import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Login from './login/Login';
import Reg from './Reg/Reg';
import './Auth.css';

const Auth = () => (
  <div>
    <Header />
    <Routes>
      <Route path="client/src/Component/Auth/login/Login.jsx" element={<Login className="login" />} />
      <Route path="client/src/Component/Auth/reg/Reg.jsx" element={<Reg className="reg" />} />
    </Routes>
  </div>
); export default Auth;
