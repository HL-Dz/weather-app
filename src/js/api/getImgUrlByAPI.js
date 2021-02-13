async function getBackgroundByAPI() {
  const api = {
    baseUrl: 'https://api.unsplash.com/photos/random',
    token: 'i0m1BV9049JBkG9rVZhK3eiWdN2yT4twIQllKnc3hbo'
  };

  try {
    let response = await fetch(`${api.baseUrl}?orientation=landscape&per_page=1&query=nature&client_id=${api.token}`)
    let data = await response.json();
    return data.urls.full;
  } catch (error) {
    throw new Error(`Something wrong: ${error}`);    
  }
  
};

export default getBackgroundByAPI;