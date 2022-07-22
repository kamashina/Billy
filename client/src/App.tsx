import {
  Routes, Route,
} from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import Sorti from './Component/Sorti/Sorti';
import Readfile from './Component/Readfile/Readfile';
import Main from './Component/Main/Main';
import './App.css';
import Footer from './Component/Footer/Footer';
import Profile from './Component/Profile/Profile';
import CreatePosts from './Component/Posts/CreatePosts';
import Showcase from './Component/Product/Showcase';
import Header from './Component/Header/Header';
import CreateNews from './Component/News/CreateNews';
import Weather from './Component/Weather/Weather';
import { useAppSelector } from './hooks/useAppSelector';
import { useAction } from './hooks/useAction';
import Auth from './Component/Auth/Auth';


const App: React.FC = () => {
  const {AxiosUserAction} = useAction()
  const token = localStorage.getItem('token');
  const user = useAppSelector((state) => state.authorization);
  useEffect(() => {
    AxiosUserAction()
    console.log(user)
    }, [])

  return (
    <div>
      {(!token) ? (
        <div>
      <Auth/>
        </div>
      )
        : (
          <div>
            <div className="singlepage-wrapper">
              <Header />
              <div className="wrap-content">
                <div className="weather">
                  <Weather />
                </div>
                <div className="center-content">
                  <Routes>
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Readfile" element={<Readfile />} />
                    <Route path="/Sorti" element={<Sorti />} />
                    <Route path="/" element={<Main />} />
                    <Route path="/Posts" element={<CreatePosts />} />
                    <Route path="/Product" element={<Showcase />} />
                    <Route path="/News" element={<CreateNews />} />
                  </Routes>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        )}
    </div>
  );
}; export default App;
