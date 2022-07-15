import React from 'react';
import './NewsContent.css';

const NewsContent = ({
  title, description, urlToImage, name, url, author,
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
);

export default NewsContent;
