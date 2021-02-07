async function getWeater (city) {
  const api = {
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
    token: '75d9ef8286c75add6033e3bad1957821'
  }

  try {
    let response = await fetch(`${api.baseUrl}/weather?q=${city}&units=metric&APPID=${api.token}`);
    let data = await response.json();

    return data;
  } catch (err) {
    err.message = `Something wrong: ${city}`;
  }
};


export default getWeater;