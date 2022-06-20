import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import Header from './Component/Header/Header';
import Sorti from './Component/Sorti/Sorti';
import Readfile from './Component/Readfile/Readfile';
import Main from './Component/Main/Main';
import Navbar from './Component/Navbar/Navbar';
import './App.css';
import Footer from './Component/Footer/Footer';
import Profile from './Component/Profile/Profile';
import RegContainer from './Component/Reg/RegContainer';

const store = createStore(rootReducer);
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RegContainer />
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
    </Provider>
  );
}
export default App;
