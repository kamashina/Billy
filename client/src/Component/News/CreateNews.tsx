import { NewsInfo } from './../../../types/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import NewsBox from './NewsBox';
import { Route, Routes } from 'react-router-dom';
import NewsContent from './NewsContent/NewsContent';
import "./CreateNews.css"

const CreateNews: React.FC = () => {
  const [news, setNews] = useState<NewsInfo[]>([]);
  const API_KEY_NEWS = '9a70ff2ed7514288b7ce8289b9bed5e0';
  const [search, SetSearch] = useState<string>('apple');
  const NowDate = moment().format('YYYY-MM-DD');

  useEffect(() => {
    addNew();
  }, []);

  async function addNew() {
    await axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&from=${NowDate}&apiKey=${API_KEY_NEWS}`)
      .then((response) => {
      setNews([...response.data.articles])
  });
  }
  const onKeyDownPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addNew();
    }
  };

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    SetSearch(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    addNew();
    console.log(news)
  };

  return (
    <div>
    <input
        onChange={changeHandler}
        placeholder="Новости"
        value={search}
        onKeyPress={onKeyDownPress}
        className ="inpnews"
      />
      <button className='btnnews' onClick={clickHandler} type="button">Поиск</button>
       <Routes>
      <Route path = "/" element={<NewsBox news = {news}/>} />
      {news.map(({},idx) => <Route path = {`/${idx}`} element = {<NewsContent news = {news} idx = {idx}/>}/>)}
      </Routes>
    </div>
  );
};
export default CreateNews;
