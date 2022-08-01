import React, { useState, useEffect } from 'react';
import instance from 'axios';
import './Weather.css';

interface IntWeather{
            temp: string;
            wind: string;
            text: string;
            humidity: string;
            city: string;
            time: string;
}
const Weather: React.FC = () => {
  const [weather, setWeather] = useState<IntWeather>({
    temp: '',
    wind: '',
    text: '',
    humidity: '',
    city: '',
    time: '',
  });
  const API_KEYS = 'fe21c95c2d46471796123346220907';
  async function addWeather() {
    await instance.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEYS}&q=Moscow&aqi=no`)
      .then((responce) => {
        setWeather({
          temp: responce.data.current.temp_c,
          wind: responce.data.current.wind_mph,
          text: responce.data.current.condition.icon,
          humidity: responce.data.current.humidity,
          city: responce.data.location.name,
          time: responce.data.location.localtime,
        });
      });
  }
  useEffect(() => {
    addWeather();
  }, []);
  return (

    <div className="weathercont">
      <p className="temp">
        {weather.temp}
        °
      </p>
      <p className="wind">
        Ветер:
        {' '}
        {weather.wind}
        {' '}
        м/с
      </p>
      <img className="logo" src={weather.text} alt="logo" />
      <p className="humidity">
        Влажность:
        {' '}
        {weather.humidity}
      </p>
      <p className="city">
        {weather.city}
      </p>
      <p className="time">
        {weather.time}
      </p>
    </div>
  );
};

export default Weather;
