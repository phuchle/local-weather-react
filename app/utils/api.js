import axios from 'axios';

const key = 'fbbc04106f66a90adfc6b9c9b3fac31e';

function parseData(response) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let dates = response.data.list.map((obj) => {
    let tempDate = new Date(obj.dt * 1000);
    let dayIndex = tempDate.getDay();
    let monthIndex = tempDate.getMonth();
    let date = tempDate.getDate();
    let icon = obj.weather[0].icon;

    return {
      date: days[dayIndex] + ', ' + months[monthIndex] + ' ' + date,
      icon: icon
    }
  });

  addDetails(dates, response);
  return dates;
}

function addDetails(array, response) {
  return array.forEach((obj, index) => {
    let currData = response.data.list[index];

    obj['details'] = {
      description: currData.weather[0].description,
      minTemp: currData.temp.min,
      maxTemp: currData.temp.max,
      humidity: currData.humidity
    }
  });
}

module.exports = {
  fetchCurrentWeather: (cityName) => {
    let encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&type=accurate&units=imperial&APPID=' + key);

    return axios.get(encodedURI)
      .then((response) => {
        return response.data;
      });
  },
  // returns an object with the needed data
  fetchFiveDayForecast: (cityName) => {
    let encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName + '&type=accurate&units=imperial&APPID=' + key + '&cnt=5');

    return axios.get(encodedURI)
      .then(parseData);
  }
}
