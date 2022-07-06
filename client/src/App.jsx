import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import instance from './axios';
import Header from './Component/Header/Header';
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

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const fsfk = useSelector((state) => state.authorization.auth);
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
      <Auth />
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
            <Route path="/Main" element={<Main />} />
            <Route path="/Posts" element={<CreatePosts />} />
            <Route path="/Product" element={<Showcase />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
} export default App;
