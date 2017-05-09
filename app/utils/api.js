import axios from 'axios';

let key = 'fbbc04106f66a90adfc6b9c9b3fac31e';

module.exports = {
  fetchCurrentWeather: (cityName) => {
    let encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&type=accurate&units=imperial&APPID=' + key);

    axios.get(encodedURI)
      .then((response) => {
        console.log(response.request.responseText);
      });
  },
  fetchFiveDayForecast: (cityName) => {
    let encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName + '&type=accurate&units=imperial&APPID=' + key + '&cnt=5');

    axios.get(encodedURI)
      .then((response) => {
        console.log(response.request.responseText);
      });
  }
}
