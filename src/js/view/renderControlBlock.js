import getWeatherByAPI from '../api/getWeatherByAPI.js';
import renderError from './renderError.js';

const generateTemplate = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  let template = `
  <div class="container">
    <div class="control-block">
      <div class="control-block__left">
        
        <button class="btn-main refresh-bg">
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
    }
    
    getWeatherByAPI(value)
      .then(weather => {
        if(weather.cod === '404') {
          this.getError(weather.message);
        }
        
        console.log(weather);
        this.$searchLocation.blur();
        this.$searchLocation.value = '';
      }).catch(err => {
        console.log(err);
      })
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