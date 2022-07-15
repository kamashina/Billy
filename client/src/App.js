import {
  Routes, Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import instance from './axios';
import Sorti from './Component/Sorti/Sorti';
import Readfile from './Component/Readfile/Readfile';
import Main from './Component/Main/Main';
import './App.css';
import Footer from './Component/Footer/Footer';
import Profile from './Component/Profile/Profile';
import CreatePosts from './Component/Posts/CreatePosts';
import Showcase from './Component/Product/Showcase';
import Auth from './Component/Auth/Auth';
import { setUser } from './store/Reduxauth/login/action';
import Header from './Component/Header/Header';
import CreateNews from './Component/News/CreateNews';
import NewsContent from './Component/News/NewsContent/NewsContent';
import Weather from './Component/Weather/Weather';

const App = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.New);
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
      {(!token) ? (
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
                    <Route path="/Readfile" element={<Readfile />} />
                    <Route path="/Sorti" element={<Sorti />} />
                    <Route path="/" element={<Main />} />
                    <Route path="/Posts" element={<CreatePosts />} />
                    <Route path="/Product" element={<Showcase />} />
                    <Route path="/News" element={<CreateNews />} />
                    {news.News.map(({
                      title, source, content, description, urlToImage, url, author,
                    }) => (
                      <Route path={`/News/${source.id}`} element={<NewsContent title={title} content={content} description={description} urlToImage={urlToImage} name={source.name} url={url} author={author} />} />
                    ))}
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