const setWeatherIcon = (id) => {
  if(id >= 200 && id <=232) {
    return `img/icons/thunder.svg`
  } else if (id >= 300 && id <= 321) {
    return `img/icons/r4.svg`
  } else if (id === 500) {
    return `img/icons/r1.svg`
  } else if (id === 501) {
    return `img/icons/r4.svg`
  } else if (id === 502) {
    return `img/icons/r5.svg`
  } else if (id === 503) {
    return `img/icons/r6.svg`
  } else if (id >= 504 && id <= 531) {
    return `img/icons/r7.svg`
  } else if (id >= 511 && id <= 531) {
    return `img/icons/r7.svg`
  } else if (id === 600) {
    return `img/icons/s1.svg`
  } else if (id === 601) {
    return `img/icons/s4.svg`
  } else if (id === 602) {
    return `img/icons/s5.svg`
  } else if (id >= 611 && id <= 621) {
    return `img/icons/s4.svg`
  } else if (id === 622) {
    return `img/icons/s6.svg`
  } else if (id >= 701 && id <= 781) {
    return `img/icons/cd-4.svg`
  } else if (id === 800) {
    return `img/icons/day.svg`
  } else if (id === 801) {
    return `img/icons/cd-1.svg`
  } else if (id === 802) {
    return `img/icons/cd-2.svg`
  } else if (id === 803) {
    return `img/icons/cd-3.svg`
  } else if (id === 804) {
    return `img/icons/cd-4.svg`
  }
};


export { setWeatherIcon };