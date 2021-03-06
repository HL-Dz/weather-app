import getWeatherByAPI from '../api/getWeatherByAPI.js';
import renderError from './renderError.js';
import { bgSwitcher, weatherBlock } from '../../index.js';

const generateTemplate = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  let template = `
  <div class="container">
    <div class="control-block">
      <div class="control-block__left">
        
        <button class="btn-main refresh-bg" id="bg-switcher">
          <span class="mountain-1"></span>
          <span class="mountain-2"></span>
          <span class="sun"></span>
          <i class="fas fa-sync-alt refresh-icon"></i>
        </button>

        <div class="temp-block">
          <button class="btn-main temp-celsius inactive-elem">°C</button>
          <button class="btn-main temp-fahrenheit">°F</button>
        </div>
      </div>

      <div class="control-block__right">
        <div class="search-block">
          <div class="search__line"></div>
          <input type="text" class="search-location" name="search-location" placeholder="Search city...">
        </div>
        <button class="btn-main search-input">Search</button>
      </div>
    </div>
  </div>
  `;

  header.innerHTML = template;
  return header;
}

class ControlBlock {
  constructor(){
    this.render();
    this.setup();
  }

  render(){
    let controlBlock = generateTemplate();
    document.body.prepend(controlBlock);
  }

  setup(){
    this.$btnSearch = document.querySelector('.search-input');
    this.$searchLocation = document.querySelector('.search-location');
    this.$controlBlockRigth = document.querySelector('.control-block__right');
    this.$searchBlock = document.querySelector('.search-block');

    this.setQuery = this.setQuery.bind(this);
    this.setQueryWithKeyboard = this.setQueryWithKeyboard.bind(this);
    this.setInputAnimation = this.setInputAnimation.bind(this);
    this.removeInputAnimation = this.removeInputAnimation.bind(this);
    this.$btnSearch.addEventListener('click', this.setQuery);
    this.$searchLocation.addEventListener('keypress', this.setQueryWithKeyboard);
    this.$searchLocation.addEventListener('focus', this.setInputAnimation);
    this.$searchLocation.addEventListener('blur', this.removeInputAnimation);
  }

  setQuery(){
    this.getWeather();
  }

  setQueryWithKeyboard(e){
    if(e.keyCode == 13) {
      this.getWeather();
    }
  }


  getWeather () {
    const value = this.$searchLocation.value;
    if(!value) {
      let errorText = 'Empty field! Please, enter city.';
      this.getError(errorText);
      return;
    } else {
      getWeatherByAPI(value)
      .then(weather => {
        if(weather.cod === '404') {
          this.getError(weather.message);
        } else {
          weatherBlock.hide();
          bgSwitcher.updateBg();
          console.log(weather);
          setTimeout(() => {
            weatherBlock.rerenderTodayWeather(weather);
          }, 500);
        }

        this.$searchLocation.blur();
        this.$searchLocation.value = '';
        setTimeout(() => {
          weatherBlock.show();
        }, 1000);
        
      }).catch(err => {
        console.log(err);
      })
    }
  }

  getError(errorText){
    const errorContent = renderError(errorText);
    errorContent.classList.add('error_active');
    this.$controlBlockRigth.prepend(errorContent);
    this.$searchLocation.disabled = true;
    this.$btnSearch.disabled = true;

    setTimeout(() => {
      this.$searchLocation.disabled = false;
      this.$btnSearch.disabled = false;
      errorContent.remove();
    }, 3300);
  }

  setInputAnimation(){
    this.$searchBlock.classList.add('search-block_active');
  }

  removeInputAnimation(){
    this.$searchBlock.classList.remove('search-block_active');
  }
  
}

export default ControlBlock;