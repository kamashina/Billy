import React from 'react';
import { NavLink } from 'react-router-dom';
import './NewsBox.css';
import { IntNews } from '../../../types/types';

interface NewsList{ 
  news: IntNews[];
}

const NewsBox: React.FC<NewsList>= ({ news }) => {

  return (
    <div className="container">
      <title>Новости</title>
      {news.map(({
        title, urlToImage, source,
      }, idx) => (
        <NavLink className="link" to={`/News/${idx}`}>
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
