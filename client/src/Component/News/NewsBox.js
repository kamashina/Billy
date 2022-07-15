import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './NewsBox.css';

const NewsBox = () => {
  const news = useSelector((state) => state.New);

  return (
    <div className="container">
      <title>Новости</title>
      {news.News.map(({
        title, urlToImage, source,
      }, idx) => (
        <NavLink className="link" to={`/News/${source.id}`}>
          <div key={idx}>
            <div className="item">
              <div>
                <img src={urlToImage} alt="img" className="photo" />
                <div>
                  <div>{title}</div>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
export default NewsBox;
