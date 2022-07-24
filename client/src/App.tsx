import {
  Routes, Route,
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Component/Footer/Footer';
import Profile from './Component/Profile/Profile';
import CreatePosts from './Component/Posts/CreatePosts';
import Header from './Component/Header/Header';
import CreateNews from './Component/News/CreateNews';
import Weather from './Component/Weather/Weather';
import { useAppSelector } from './hooks/useAppSelector';
import { useAction } from './hooks/useAction';
import Auth from './Component/Auth/Auth';
import Main from './Component/Main/Main';


const App: React.FC = () => {
  const { AxiosUserAction } = useAction();
  const {auth} = useAppSelector((state) => state.authorization);
  useEffect(() => {
    AxiosUserAction();
    console.log(auth)
  }, [auth]);

  return (
    <div>
      {(!auth) ? (
        <div>
          <Auth />
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
                    <Route path="/" element={<Main />} />
                    <Route path="/Posts" element={<CreatePosts />} />
                    <Route path="/News/*" element={<CreateNews />} />
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

