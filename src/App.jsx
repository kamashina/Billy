import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import rootReducer from './store/reducers';
import Header from './Component/Header/Header';
import Sorti from './Component/Sorti/Sorti';
import Readfile from './Component/Readfile/Readfile';
import Main from './Component/Main/Main';
import Navbar from './Component/Navbar/Navbar';
import './App.css';
import Footer from './Component/Footer/Footer';
import Profile from './Component/Profile/Profile';
import Reg from './Component/Reg/Reg';

function App() {
  const sel = useSelector((state) => state.registration.parol);
  if (sel === false) {
    return (
      <Reg />
    );
  }
  return (
    <BrowserRouter>
      <div className="singlepage-wrapper">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Readfile" element={<Readfile />} />
            <Route path="/Sorti" element={<Sorti />} />
            <Route path="/Main" element={<Main />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function AppWrapper() {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
} export default AppWrapper;
