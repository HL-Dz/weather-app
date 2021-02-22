const getForecastByAPI = async (city) => {
 const api = {
   baseUrl: 'https://api.weatherapi.com/v1/forecast.json',
   token: '820345b37ec84701a5a121456212202'
 };

 try {
   let response = await fetch(`${api.baseUrl}?key=${api.token}&q=${city}&days=3`);
   let result = await response.json();
   return result;
 } catch (err) {
   throw new Error('Something wrong!')
 }
}

export default getForecastByAPI;