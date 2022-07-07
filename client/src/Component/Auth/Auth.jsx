import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Login from './login/Login';
import Reg from './reg/Reg';
import './Auth.css';

function Auth() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="client/src/Component/Auth/login/Login.jsx" element={<Login />} />
          <Route path="client/src/Component/Auth/reg/Reg.jsx" element={<Reg />} />
        </Routes>
      </div>
    </div>
  );
} export default Auth;
