import { NewsInfo } from './../../../../types/types';
import React from 'react';
import './NewsContent.css';

interface NewsCont {
    news: NewsInfo[];
    idx: number;
}

const NewsContent: React.FC<NewsCont> = ({ news, idx }) => {
    return (
        <div>
            <div className="boxcontent">
                <div className="newscontent">
                    <h1>{news[idx].title}</h1>
                    <a href={news[idx].url}>{news[idx].name}</a>
                    <span>Reported by: {news[idx].author}</span>
                    <img className="newsphoto" src={news[idx].urlToImage} alt="img" />
                    <span>{news[idx].description}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsContent;
