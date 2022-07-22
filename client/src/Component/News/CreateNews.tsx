import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import NewsBox from './NewsBox';
import { IntNews } from '../../../types/types';
import NewsContent from './NewsContent/NewsContent';
import { Route, Routes } from 'react-router-dom';


const CreateNews: React.FC = () => {
const [news, setNews] = useState<IntNews[]>([{
  title: '',
  source: {
    id: '',
    name: '',
  },
  content: '',
  description: '',
  urlToImage: '',
  url: '',
  author: '',
  name: ''
}])
  

const API_KEY_NEWS = '9a70ff2ed7514288b7ce8289b9bed5e0';
const [search, SetSearch] = useState<string>('apple');
const NowDate = moment().format('YYYY-MM-DD');

useEffect(() => {
  addNew()
}, [ ])


async function addNew(){
 await axios.get<IntNews[]>(`https://newsapi.org/v2/top-headlines?q=${search}&from=${NowDate}&apiKey=${API_KEY_NEWS}`)
    .then((response) => setNews(response.data));
}



  const onKeyDownPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addNew()
  }
}


const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
  SetSearch(e.target.value)
}


const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
addNew()
}

  return (
    <div>
      <input
        onChange={changeHandler}
        placeholder="Новости"
        value={search}
        onKeyPress={onKeyDownPress}
      />
      <button onClick={clickHandler} type="button">Поиск</button>
      <NewsBox news = {news} />
      <Routes>
        {news.map(({}, idx) => <Route path={`/News/${idx}`} element={<NewsContent news = {news}/>} /> )}
       </Routes>
    </div>
  );
};
export default CreateNews;
