import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Login from './login/Login';
import Reg from './Reg/Reg';
import './Auth.css';
import React from 'react';

const Auth: React.FC = () => (
  <div>
    <Header />
    <Routes>
      <div className= "login">
      <Route path="/Login.js" element={<Login />} />
      </div>
      <div className= "regi">
      <Route path="/Reg.js" element={<Reg />} />
      </div>
    </Routes>
  </div>
); export default Auth;
