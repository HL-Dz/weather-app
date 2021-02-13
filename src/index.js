import './sass/main.scss';
import ControlBlock from './js/view/renderControlBlock';
import { BgSwitcher } from './js/controllers/bgSwither.js';


const control = new ControlBlock();
const bgSwitcher = new BgSwitcher(document.querySelector('#bg-switcher'), document.body);


export { bgSwitcher };