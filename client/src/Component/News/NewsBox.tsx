import { NewsInfo } from './../../../types/types';
import React from 'react';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import './NewsBox.css';
import NewsContent from './NewsContent/NewsContent';

interface NewsList{ 
  news: NewsInfo[];
}

const NewsBox: React.FC<NewsList>= ( {news} ) => {

  return (
    <div className="container">
      <title>Новости</title>
      {news.map(({
        title, urlToImage,source
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