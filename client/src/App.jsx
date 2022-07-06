import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import instance from './axios';
import Sorti from './Component/Sorti/Sorti';
import Readfile from './Component/Readfile/Readfile';
import Main from './Component/Main/Main';
import Navbar from './Component/Navbar/Navbar';
import './App.css';
import Footer from './Component/Footer/Footer';
import Profile from './Component/Profile/Profile';
import CreatePosts from './Component/Posts/CreatePosts';
import Showcase from './Component/Product/Showcase';
import Auth from './Component/Auth/Auth';
import { setUser } from './store/Reduxauth/login/action';
import Header from './Component/Header/Header';
import Login from './Component/Auth/login/Login';
import Reg from './Component/Auth/reg/Reg';

function App() {
  const dispatch = useDispatch();
  const fsfk = useSelector((state) => state.authorization.auth);
  const token = (localStorage.getItem('token'));
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
  if (!token) {
    return (
      <div>
        <Auth />
        <Routes>
          <Route path="client/src/Component/Auth/login/Login.jsx" element={<Login />} />
          <Route path="client/src/Component/Auth/reg/Reg.jsx" element={<Reg />} />
        </Routes>
      </div>
    );
  }
  return (
    <div>
      <div className="singlepage-wrapper">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Readfile" element={<Readfile />} />
            <Route path="/Sorti" element={<Sorti />} />
            <Route path="/" element={<Main />} />
            <Route path="/Posts" element={<CreatePosts />} />
            <Route path="/Product" element={<Showcase />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
} export default App;
