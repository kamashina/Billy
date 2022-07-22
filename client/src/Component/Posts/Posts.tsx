import { Link } from 'react-router-dom';
import './Posts.css';

const Posts = ({ posts }) => (
  <div>
    {posts.map(({ value, nickname }, idx) => (
      <div key={idx} className="bubble">
        <Link className="user" to="/Profile"><div>{nickname}</div></Link>
        <div className="message">{value}</div>
      </div>
    ))}
  </div>
); export default Posts;
