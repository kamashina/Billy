import axios from 'axios';
import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { setNews } from '../../store/News/action';
import NewsBox from './NewsBox';

const CreateNews = () => {
  const API_KEY_NEWS = '9a70ff2ed7514288b7ce8289b9bed5e0';
  const dispatch = useDispatch();
  const [search, SetSearch] = useState('russia');
  const NowDate = moment().format('YYYY-MM-DD');
  function SearchNews() {
    axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&from=${NowDate}&apiKey=${API_KEY_NEWS}`)
      .then((response) => dispatch(setNews(response.data.articles)));
  }
  return (
    <div>
      <input
        onChange={(event) => SetSearch(event.target.value)}
        placeholder="Новости"
        value={search}
      />
      <button onClick={SearchNews} type="button">Поиск</button>
      <NewsBox />
    </div>
  );
};
export default CreateNews;
