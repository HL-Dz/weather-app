import { setWeatherIcon } from './setWeatherIcon.js';

const setTodayWeather = (weather) => {
  document.querySelector('.location__city').innerText = `${weather.name}, `;
  document.querySelector('.location__country').innerText = weather.sys.country;
  document.querySelector('.forecast__temperature').innerText = Math.round(weather.main.temp);
  document.querySelector('.forecast__icon').src = `${setWeatherIcon(weather.weather[0].id)}`;
  document.querySelector('.forecast__summary').innerText = weather.weather[0].main;
  document.querySelector('.forecast__feels').innerText = `Feels like: ${Math.round(weather.main.feels_like)}`;
  document.querySelector('.forecast__wind').innerText = `Wind: ${Math.round(weather.wind.speed)} m/s`;
  document.querySelector('.forecast__humidity').innerText = `Humidity: ${weather.main.humidity} %`;
}

export { setTodayWeather };