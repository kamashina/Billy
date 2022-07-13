import './Footer.css';
import { API_URL } from '../../axios';

const Footer = () => (
  <div className="footer">
    <p>Создатель: Kamashina</p>
    <div className="vk">
      <a href="https://vk.com/kamran00001">
        <img src={`${API_URL}/uploads/vk.png`} alt="vk" />
      </a>
    </div>
    <div className="git">
      <a href="https://github.com/kamashina/Billy">
        <img src={`${API_URL}/uploads/25231.png`} alt="git" />
      </a>
    </div>
  </div>
); export default Footer;
