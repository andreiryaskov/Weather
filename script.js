// let select = document.querySelector('.select');
// let cityName = document.querySelector('.cityName');
// let cityTemp = document.querySelector('.cityTemp');
// let cityImg = document.querySelector('.cityWeatherImg');
// let cityWeather = document.querySelector('.cityWeatherName');
// let param = {
//   url: 'https://api.openweathermap.org/data/2.5/',
//   key: '36e2d65aedb27f09b304c1fed0441017'
// };

// function getWeather() {
//   param.cityId = select.value;
//   fetch(`${param.url}weather?id=${param.cityId}&appid=${param.key}`)
//   .then (weather => {return weather.json()})
//   .then (showWeather);
// }

// function showWeather(data) {
//   console.log(data);
//   let weather = {
//     temp: Math.round(data.main.temp - 273),
//     weather: data.weather[0].main,
//     img: data.weather[0].icon,
//     name: data.name
//   }
//   cityName.innerHTML = weather.name;
//   cityTemp.innerHTML = `${weather.temp}&deg;`;
//   cityImg.src = `http://openweathermap.org/img/wn/${weather.img}@2x.png`;
//   cityWeather.innerHTML = weather.weather;
  
// }

// getWeather();
// select.onchange = getWeather;


// var your_drink;

// var reverse = function(s) {
//   return s.split('').reverse().join('')
// }

// var barista = {
//   str1: 'ion',
//   str2: reverse('rcne'),
//   str3: 'ypt',
//   request: function(preference) {
//     console.log(preference + ' Secret word: ' + this.str2 + this.str3 + this.str2) 
//   }
// };

// barista.request(your_drink)

card = [
  // '3♣', 
  // // '3♦', 
  // // '3♥', 
  '3♠'
]

// let out = {
//   '♣': 'clubs',
//   '♦': 'diamonds',
//   '♥': 'hearts',
//   '♠': 'spades'
// }


function defineSuit(card) {
  if (card[0].split('')[1] === '♣') {
    console.log('clubs') 
  } else if (card[0].split('')[1] === '♦') {
    console.log('diamonds') 
  } else if (card[0].split('')[1] === '♥') {
    console.log('hearts') 
  } else if (card[0].split('')[1] === '♠') {
    console.log('spades') 
  }
}

defineSuit(card)