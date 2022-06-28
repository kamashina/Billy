import { Link } from 'react-router-dom';
import './Posts.css';

function Posts({ posts }) {
  return (
    <div>
      {posts.map(({ value, user }, idx) => (
        <div key={idx} className="container">
          <Link to="/Profile"><div>{user}</div></Link>
          <div>{value}</div>
        </div>
      ))}
    </div>
  );
} export default Posts;
