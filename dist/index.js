/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/* eslint-disable no-param-reassign */
async function getWeather(city) {
  try {
    const weatherAPI = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=a13d8edf32d7b9d01229e1749c07fcdc`,
    );
    const responseAPI = await weatherAPI.json();
    return responseAPI;
  } catch {
    throw new Error('error weather not found!');
  }
}

// async function getForecast(city) {
//   try {
//     const weatherAPI = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=a13d8edf32d7b9d01229e1749c07fcdc`);
//     const responseAPI = await weatherAPI.json();
//     return responseAPI;
//   } catch {
//     throw new Error('error weather forecast not found!');
//   }
// }

function toggleDisplayOnOff(selector) {
  const layer = document.querySelector(selector);
  if (layer.classList.contains('active')) {
    layer.classList.remove('active');
  } else {
    layer.classList.add('active');
  }
}

function toggleDisplayOn(selector) {
  const layer = document.querySelector(selector);
  layer.classList.add('active');
}
function toggleDisplayOff(selector) {
  const layer = document.querySelector(selector);
  layer.classList.remove('active');
}

function loadingError(msg, code) {
  const layer = document.querySelector('.loading-error');
  layer.textContent = `Error${code}(${msg}) please check your input again`;
}

async function showWeather(city) {
  const weatherCity = await getWeather(city);
  // eslint-disable-next-line no-unused-vars
  // const weatherForecast = await getForecast(city);
  try {
    const {
      clouds: { all: cloud },
      name,
      sys: { country },
      main: { temp, humidity },
      wind: { speed },
    } = weatherCity;
    const desc = weatherCity.weather[0].description;

    return {
      name,
      country,
      cloud,
      temp: Math.round(temp),
      humidity,
      desc,
      speed,
    };
  } catch {
    toggleDisplayOnOff('.loading-card');
    loadingError(weatherCity.message, weatherCity.cod);
    toggleDisplayOnOff('.loading-error');
    throw new Error(weatherCity.message);
  }
}

function displayToDOM(val) {
  const displayLayers = document.querySelectorAll('[data="display"]');
  const displayIcon = document.querySelector('.display.icon img');
  displayLayers.forEach((layer) => {
    const arrays = [
      'name',
      'country',
      'temp',
      'humidity',
      'desc',
      'cloud',
      'speed',
    ];
    arrays.forEach((array) => {
      if (layer.classList.contains(array)) {
        layer.textContent = '';
        layer.textContent = val[array];
      }
    });
  });
  const { desc } = val;
  switch (desc) {
    case 'clear sky':
      displayIcon.src = './img/sun.svg';
      break;
    case 'overcast clouds':
      displayIcon.src = './img/cloud-sun.svg';
      break;
    case 'few clouds':
      displayIcon.src = './img/clouds.svg';
      break;
    case 'broken clouds':
      displayIcon.src = './img/cloud.svg';
      break;
    case 'scattered clouds':
      displayIcon.src = './img/clouds.svg';
      break;
    case 'thunderstorm':
      displayIcon.src = './img/cloud-lightning-rain.svg';
      break;
    case 'light rain':
      displayIcon.src = './img/cloud-drizzle.svg';
      break;
    case 'moderate rain':
      displayIcon.src = './img/cloud-rain.svg';
      break;
    case 'heavy rain':
      displayIcon.src = './img/cloud-rain-heavy.svg';
      break;
    case 'mist':
      displayIcon.src = './img/cloud-haze.svg';
      break;
    case 'snow':
      displayIcon.src = './img/cloud-snow.svg';
      break;
    case 'light intensity shower rain':
      displayIcon.src = './img/cloud-drizzle.svg';
      break;
    case 'heavy intensity rain':
      displayIcon.src = './img/cloud-rain-heavy.svg';
      break;
    default:
      displayIcon.textContent = 'weather undetected';
  }
}

function inputCityWeather(city) {
  showWeather(city).then((val) => {
    toggleDisplayOff('.loading-card');
    displayToDOM(val);
    toggleDisplayOnOff('.weather-card');
  });
}

function submitEvent() {
  const layer = document.querySelector('.weather-card');
  const inputCity = document.querySelector('.inputCity');
  toggleDisplayOff('.loading-error');

  inputCityWeather(inputCity.value);
  inputCity.value = null;

  if (layer.classList.contains('active')) {
    toggleDisplayOnOff('.weather-card');
  }
  if (!layer.classList.contains('active')) {
    toggleDisplayOn('.loading-card');
  }
}

function userSubmitCity() {
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    submitEvent();
  });
}

function loadingDisplay(text) {
  const layerCard = document.querySelector('.loading-card');
  const layerAnim = document.querySelector('.loading-animation');
  const image = document.createElement('img');
  const para = document.createElement('p');
  para.className = 'loading-card-text';
  para.textContent = text;
  image.className = 'loading-animation-img';
  image.src = './img/loading-2.png';
  layerAnim.append(image);
  layerCard.append(para);
}

userSubmitCity();
loadingDisplay('Please Wait');

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxLQUFLO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJGQUEyRixLQUFLO0FBQ2hHO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSyxHQUFHLElBQUk7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQSxhQUFhLFNBQVM7QUFDdEIsY0FBYyxnQkFBZ0I7QUFDOUIsY0FBYyxPQUFPO0FBQ3JCLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJBUEkgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmQVBQSUQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgLFxuICAgICk7XG4gICAgY29uc3QgcmVzcG9uc2VBUEkgPSBhd2FpdCB3ZWF0aGVyQVBJLmpzb24oKTtcbiAgICByZXR1cm4gcmVzcG9uc2VBUEk7XG4gIH0gY2F0Y2gge1xuICAgIHRocm93IG5ldyBFcnJvcignZXJyb3Igd2VhdGhlciBub3QgZm91bmQhJyk7XG4gIH1cbn1cblxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QoY2l0eSkge1xuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IHdlYXRoZXJBUEkgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2ApO1xuLy8gICAgIGNvbnN0IHJlc3BvbnNlQVBJID0gYXdhaXQgd2VhdGhlckFQSS5qc29uKCk7XG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlQVBJO1xuLy8gICB9IGNhdGNoIHtcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHdlYXRoZXIgZm9yZWNhc3Qgbm90IGZvdW5kIScpO1xuLy8gICB9XG4vLyB9XG5cbmZ1bmN0aW9uIHRvZ2dsZURpc3BsYXlPbk9mZihzZWxlY3Rvcikge1xuICBjb25zdCBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICBpZiAobGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9IGVsc2Uge1xuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURpc3BsYXlPbihzZWxlY3Rvcikge1xuICBjb25zdCBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICBsYXllci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZURpc3BsYXlPZmYoc2VsZWN0b3IpIHtcbiAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGxvYWRpbmdFcnJvcihtc2csIGNvZGUpIHtcbiAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1lcnJvcicpO1xuICBsYXllci50ZXh0Q29udGVudCA9IGBFcnJvciR7Y29kZX0oJHttc2d9KSBwbGVhc2UgY2hlY2sgeW91ciBpbnB1dCBhZ2FpbmA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dXZWF0aGVyKGNpdHkpIHtcbiAgY29uc3Qgd2VhdGhlckNpdHkgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHkpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgLy8gY29uc3Qgd2VhdGhlckZvcmVjYXN0ID0gYXdhaXQgZ2V0Rm9yZWNhc3QoY2l0eSk7XG4gIHRyeSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xvdWRzOiB7IGFsbDogY2xvdWQgfSxcbiAgICAgIG5hbWUsXG4gICAgICBzeXM6IHsgY291bnRyeSB9LFxuICAgICAgbWFpbjogeyB0ZW1wLCBodW1pZGl0eSB9LFxuICAgICAgd2luZDogeyBzcGVlZCB9LFxuICAgIH0gPSB3ZWF0aGVyQ2l0eTtcbiAgICBjb25zdCBkZXNjID0gd2VhdGhlckNpdHkud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgY291bnRyeSxcbiAgICAgIGNsb3VkLFxuICAgICAgdGVtcDogTWF0aC5yb3VuZCh0ZW1wKSxcbiAgICAgIGh1bWlkaXR5LFxuICAgICAgZGVzYyxcbiAgICAgIHNwZWVkLFxuICAgIH07XG4gIH0gY2F0Y2gge1xuICAgIHRvZ2dsZURpc3BsYXlPbk9mZignLmxvYWRpbmctY2FyZCcpO1xuICAgIGxvYWRpbmdFcnJvcih3ZWF0aGVyQ2l0eS5tZXNzYWdlLCB3ZWF0aGVyQ2l0eS5jb2QpO1xuICAgIHRvZ2dsZURpc3BsYXlPbk9mZignLmxvYWRpbmctZXJyb3InKTtcbiAgICB0aHJvdyBuZXcgRXJyb3Iod2VhdGhlckNpdHkubWVzc2FnZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvRE9NKHZhbCkge1xuICBjb25zdCBkaXNwbGF5TGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGE9XCJkaXNwbGF5XCJdJyk7XG4gIGNvbnN0IGRpc3BsYXlJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXkuaWNvbiBpbWcnKTtcbiAgZGlzcGxheUxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgIGNvbnN0IGFycmF5cyA9IFtcbiAgICAgICduYW1lJyxcbiAgICAgICdjb3VudHJ5JyxcbiAgICAgICd0ZW1wJyxcbiAgICAgICdodW1pZGl0eScsXG4gICAgICAnZGVzYycsXG4gICAgICAnY2xvdWQnLFxuICAgICAgJ3NwZWVkJyxcbiAgICBdO1xuICAgIGFycmF5cy5mb3JFYWNoKChhcnJheSkgPT4ge1xuICAgICAgaWYgKGxheWVyLmNsYXNzTGlzdC5jb250YWlucyhhcnJheSkpIHtcbiAgICAgICAgbGF5ZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgbGF5ZXIudGV4dENvbnRlbnQgPSB2YWxbYXJyYXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgeyBkZXNjIH0gPSB2YWw7XG4gIHN3aXRjaCAoZGVzYykge1xuICAgIGNhc2UgJ2NsZWFyIHNreSc6XG4gICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvc3VuLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdvdmVyY2FzdCBjbG91ZHMnOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLXN1bi5zdmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZmV3IGNsb3Vkcyc6XG4gICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvY2xvdWRzLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdicm9rZW4gY2xvdWRzJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC5zdmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2NhdHRlcmVkIGNsb3Vkcyc6XG4gICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvY2xvdWRzLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0aHVuZGVyc3Rvcm0nOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLWxpZ2h0bmluZy1yYWluLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsaWdodCByYWluJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1kcml6emxlLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtb2RlcmF0ZSByYWluJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1yYWluLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdoZWF2eSByYWluJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1yYWluLWhlYXZ5LnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaXN0JzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1oYXplLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzbm93JzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1zbm93LnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsaWdodCBpbnRlbnNpdHkgc2hvd2VyIHJhaW4nOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLWRyaXp6bGUuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2hlYXZ5IGludGVuc2l0eSByYWluJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1yYWluLWhlYXZ5LnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZGlzcGxheUljb24udGV4dENvbnRlbnQgPSAnd2VhdGhlciB1bmRldGVjdGVkJztcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnB1dENpdHlXZWF0aGVyKGNpdHkpIHtcbiAgc2hvd1dlYXRoZXIoY2l0eSkudGhlbigodmFsKSA9PiB7XG4gICAgdG9nZ2xlRGlzcGxheU9mZignLmxvYWRpbmctY2FyZCcpO1xuICAgIGRpc3BsYXlUb0RPTSh2YWwpO1xuICAgIHRvZ2dsZURpc3BsYXlPbk9mZignLndlYXRoZXItY2FyZCcpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3VibWl0RXZlbnQoKSB7XG4gIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2FyZCcpO1xuICBjb25zdCBpbnB1dENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRDaXR5Jyk7XG4gIHRvZ2dsZURpc3BsYXlPZmYoJy5sb2FkaW5nLWVycm9yJyk7XG5cbiAgaW5wdXRDaXR5V2VhdGhlcihpbnB1dENpdHkudmFsdWUpO1xuICBpbnB1dENpdHkudmFsdWUgPSBudWxsO1xuXG4gIGlmIChsYXllci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgdG9nZ2xlRGlzcGxheU9uT2ZmKCcud2VhdGhlci1jYXJkJyk7XG4gIH1cbiAgaWYgKCFsYXllci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgdG9nZ2xlRGlzcGxheU9uKCcubG9hZGluZy1jYXJkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlclN1Ym1pdENpdHkoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHN1Ym1pdEV2ZW50KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkaW5nRGlzcGxheSh0ZXh0KSB7XG4gIGNvbnN0IGxheWVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLWNhcmQnKTtcbiAgY29uc3QgbGF5ZXJBbmltID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmctYW5pbWF0aW9uJyk7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmEuY2xhc3NOYW1lID0gJ2xvYWRpbmctY2FyZC10ZXh0JztcbiAgcGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGltYWdlLmNsYXNzTmFtZSA9ICdsb2FkaW5nLWFuaW1hdGlvbi1pbWcnO1xuICBpbWFnZS5zcmMgPSAnLi9pbWcvbG9hZGluZy0yLnBuZyc7XG4gIGxheWVyQW5pbS5hcHBlbmQoaW1hZ2UpO1xuICBsYXllckNhcmQuYXBwZW5kKHBhcmEpO1xufVxuXG51c2VyU3VibWl0Q2l0eSgpO1xubG9hZGluZ0Rpc3BsYXkoJ1BsZWFzZSBXYWl0Jyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=