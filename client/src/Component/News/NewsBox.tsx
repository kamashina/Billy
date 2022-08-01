import { NewsInfo } from './../../../types/types';
import React from 'react';
import { NavLink} from 'react-router-dom';
import './NewsBox.css';

interface NewsList{ 
  news: NewsInfo[];
}

const NewsBox: React.FC<NewsList>= ( {news} ) => {

  return (
    <div className="container">
      <title>Новости</title>
      {news.map(({
        title, urlToImage
      },idx) => (
        <NavLink className="link" to={`/News/${idx}`}>
          <div key={title}>
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