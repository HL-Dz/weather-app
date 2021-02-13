import getBackgroundByAPI from '../api/getImgUrlByAPI.js';


const DEFAULT_BACKGROUND = './img/bg/test-bg-3.jpg';


class BgSwitcher {
  constructor(elem, container = null){
    this.elem = elem;
    this.container = container;

    this.setupEvents();
  }

  setupEvents(){
    this.elem.addEventListener('click', () => {
      this.updateBg();
    })
  }

  async updateBg(){
    let imgUrl = '';
    this.elem.classList.add('refresh-bg_active');
    this.container.classList.add('main-bg_inactive');
    try {
      imgUrl = await getBackgroundByAPI();
    } catch {
      imgUrl = DEFAULT_BACKGROUND;
    } finally {
      setTimeout(() => {
        this.container.style.backgroundImage = `url(${imgUrl})`;
        this.container.classList.remove('main-bg_inactive');
        this.elem.classList.remove('refresh-bg_active');
      }, 2000);
    }
  }
};

export  { BgSwitcher };