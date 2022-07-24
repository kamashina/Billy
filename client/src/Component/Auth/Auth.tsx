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
        <Route path="/Login" element={<Login />} />
        <Route path="/Reg" element={<Reg />} />
    </Routes>
  </div>
); export default Auth;
