Element.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling);
};

const generateWeatherTemplate = () => {
  const main = document.createElement('main');
  main.classList.add('content');

  let template = `
  <div class="container">
    <div class="weather">

      <div class="location">
        <div class="location__city">Brest,</div>
        <div class="location__country">Belarus</div>
      </div>

      <div class="weather__time">Thu 5 February 18:11</div>

      <div class="forecast">
        <div class="forecast__temperature">-11</div>
        <div class="forecast__info">
          <img class="forecast__icon" src="./img/cloudy.svg" alt="Sunny">
          <div class="forecast__summary">Cloudy</div>
          <div class="forecast__feels">Feels like: -15&deg;</div>
          <div class="forecast__wind">Wind: 2 m/s</div>
          <div class="forecast__humidity">Humidity: 70%</div>
        </div>
      </div>

      <div class=weather-next>
        <div class="card">
          <div class="card__day">Friday</div>
          <div class="card__info">
            <div class="card__temperature">-5&deg;</div>
            <div class="card__pic">
              <img class="card__img" src="./img/cloudy.svg" alt="Cloudy">
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card__day">Saturday</div>
          <div class="card__info">
            <div class="card__temperature">1&deg;</div>
            <div class="card__pic">
              <img class="card__img" src="./img/sunny.svg" alt="Sunny">
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card__day">Sunday</div>
          <div class="card__info">
            <div class="card__temperature">-7&deg;</div>
            <div class="card__pic">
              <img class="card__img" src="./img/snowy-6.svg" alt="Snowy">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`

  main.innerHTML = template;
  return main;
};

export class WeatherBlock {
  constructor(){
    this.render();
  }

  render() {
    let weatherBlock = generateWeatherTemplate();
    weatherBlock.appendAfter(document.querySelector('header.header'));
  }
}


export default WeatherBlock;