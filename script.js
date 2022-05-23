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


// function defineSuit(card) {
//   for (let i = 0; i < card.length; i++) {
//       if (card[i] === '♣') {
//     return 'clubs'
//   } else if (card[i] === '♦') {
//     return 'diamonds'
//   } else if (card[i] === '♥') {
//     return 'hearts'
//   }else if (card[i] === '♣') {
//     return 'spades'
//   }
// }
// }

// defineSuit(card)

// const stringToNumber = function(str){
//   return parseInt(str, 10)
// }

// stringToNumber("1234")

// function makeNegative(num) {
//   // Code?
// }

// function toFreud(string) {

//   // let res = []

//   // let a = string.split(' ')
  
//   // for (let i = 0; i < a.length; i++) {
//   //   res.push(a[i].replace(a[i], 'sex'))
//   // }

//   console.log(string.split(' ').map(i => i.replace(i, 'sex')).join(' '))



//   // console.log(res.join(' '))
//   }

//  toFreud("You're becoming a true freudian expert")

function sumOfDifferences(arr) {
  let res = arr.sort((a, b)=>a-b).reverse()

  if (res.length == 1) {
    return 0;
  } else if (res == []) {
    return [];
  }
  let newArr = []
  for (let i = 0; i < res.length - 1; i++) {
    newArr[i] = res[i] - res[i + 1]
  }
  let sum = 0;
      for (let i = 0; i < newArray.length; i++) {
        sum += newArray[i];
      }
      // newArray.pop();
      return sum;

  console.log(newArr)
  

}

sumOfDifferences([11, 20, 1, 5, 8, 6, 17])