import React from 'react';
import { IntNews } from '../../../../types/types';
import './NewsContent.css';

interface NewsCont{
  news: IntNews[]
}


const NewsContent: React.FC<NewsCont> = ({ news }) => {


  return (
<div>
    {news.map(({
      title, description, urlToImage, url, author, name
    }) => (
      <div className="boxcontent">
      <div className="newscontent">
        <h1>{title}</h1>
        <a href={url}>{name}</a>
        <span>
          Reported by:
          {' '}
          {author}
        </span>
        <img className="newsphoto" src={urlToImage} alt="img" />
        <span>{description}</span>
      </div>
    </div>
    ))}
    </div>
  )
};

export default NewsContent;
