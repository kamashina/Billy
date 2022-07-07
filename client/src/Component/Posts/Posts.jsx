import { Link } from 'react-router-dom';
import './Posts.css';

function Posts({ posts }) {
  return (
    <div className="container">
      {posts.map(({ value, user }, idx) => (
        <div key={idx} className="container">
          <Link className="user" to="/Profile"><div>{user}</div></Link>
          <div className="message">{value}</div>
        </div>
      ))}
    </div>
  );
} export default Posts;
