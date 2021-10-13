let select = document.querySelector('.select');
let cityName = document.querySelector('.cityName');
let cityTemp = document.querySelector('.cityTemp');
let cityImg = document.querySelector('.cityWeatherImg');
let cityWeather = document.querySelector('.cityWeatherName');
let param = {
  url: 'https://api.openweathermap.org/data/2.5/',
  key: '36e2d65aedb27f09b304c1fed0441017'
};

function getWeather() {
  param.cityId = select.value;
  fetch(`${param.url}weather?id=${param.cityId}&appid=${param.key}`)
  .then (weather => {return weather.json()})
  .then (showWeather);
}

function showWeather(data) {
  console.log(data);
  let weather = {
    temp: Math.round(data.main.temp - 273),
    weather: data.weather[0].main,
    img: data.weather[0].icon,
    name: data.name
  }
  cityName.innerHTML = weather.name;
  cityTemp.innerHTML = `${weather.temp}&deg;`;
  cityImg.src = `http://openweathermap.org/img/wn/${weather.img}@2x.png`;
  cityWeather.innerHTML = weather.weather;
  
}

getWeather();
select.onchange = getWeather;