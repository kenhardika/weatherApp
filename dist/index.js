/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weatherConditions.js":
/*!**********************************!*\
  !*** ./src/weatherConditions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function updateWeatherIcon(val, target) { // target = '.display.icon img'
  const displayIcon = document.querySelector(target);
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
    case 'shower rain':
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
    case 'heavy intensity shower rain':
      displayIcon.src = './img/cloud-rain-heavy.svg';
      break;
    case 'haze':
      displayIcon.src = './img/cloud-haze.svg';
      break;
    default:
      displayIcon.textContent = 'weather undetected';
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateWeatherIcon);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weatherConditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherConditions */ "./src/weatherConditions.js");


/* eslint-disable no-param-reassign */
async function getWeather(city) {
  try {
    const weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=a13d8edf32d7b9d01229e1749c07fcdc`, { mode: 'cors' });
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

function updateWeatherText(val, target) { // '[data="display"]'
  const displayLayers = document.querySelectorAll(target);
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
}

function inputCityWeather(city) {
  showWeather(city).then((val) => {
    toggleDisplayOff('.loading-card');
    updateWeatherText(val, '[data="display"]');
    (0,_weatherConditions__WEBPACK_IMPORTED_MODULE_0__["default"])(val, '.display.icon img');
    toggleDisplayOnOff('.weather-card');
  });
}

function checkIfWeatherCardActive(target) { // '.weather-card'
  const layer = document.querySelector(target);
  if (layer.classList.contains('active')) {
    toggleDisplayOnOff('.weather-card');
  }
  if (!layer.classList.contains('active')) {
    toggleDisplayOn('.loading-card');
  }
}

function submitEvent() {
  const inputCity = document.querySelector('.inputCity');
  inputCityWeather(inputCity.value);
  inputCity.value = null;
  toggleDisplayOff('.loading-error');
  checkIfWeatherCardActive('.weather-card');
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBMEM7QUFDMUM7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7OztVQ3pEakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGLEtBQUsseURBQXlELGNBQWM7QUFDcEs7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJGQUEyRixLQUFLO0FBQ2hHO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSyxHQUFHLElBQUk7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQSxhQUFhLFNBQVM7QUFDdEIsY0FBYyxnQkFBZ0I7QUFDOUIsY0FBYyxPQUFPO0FBQ3JCLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFpQjtBQUNyQjtBQUNBLEdBQUc7QUFDSDs7QUFFQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvd2VhdGhlckNvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJJY29uKHZhbCwgdGFyZ2V0KSB7IC8vIHRhcmdldCA9ICcuZGlzcGxheS5pY29uIGltZydcbiAgY29uc3QgZGlzcGxheUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIGNvbnN0IHsgZGVzYyB9ID0gdmFsO1xuICBzd2l0Y2ggKGRlc2MpIHtcbiAgICBjYXNlICdjbGVhciBza3knOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL3N1bi5zdmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnb3ZlcmNhc3QgY2xvdWRzJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1zdW4uc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2ZldyBjbG91ZHMnOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3Vkcy5zdmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYnJva2VuIGNsb3Vkcyc6XG4gICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvY2xvdWQuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NjYXR0ZXJlZCBjbG91ZHMnOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3Vkcy5zdmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndGh1bmRlcnN0b3JtJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1saWdodG5pbmctcmFpbi5zdmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGlnaHQgcmFpbic6XG4gICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvY2xvdWQtZHJpenpsZS5zdmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbW9kZXJhdGUgcmFpbic6XG4gICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvY2xvdWQtcmFpbi5zdmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2hvd2VyIHJhaW4nOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLXJhaW4uc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2hlYXZ5IHJhaW4nOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLXJhaW4taGVhdnkuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pc3QnOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLWhhemUuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Nub3cnOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLXNub3cuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xpZ2h0IGludGVuc2l0eSBzaG93ZXIgcmFpbic6XG4gICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvY2xvdWQtZHJpenpsZS5zdmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaGVhdnkgaW50ZW5zaXR5IHJhaW4nOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLXJhaW4taGVhdnkuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2hlYXZ5IGludGVuc2l0eSBzaG93ZXIgcmFpbic6XG4gICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvY2xvdWQtcmFpbi1oZWF2eS5zdmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaGF6ZSc6XG4gICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvY2xvdWQtaGF6ZS5zdmcnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGRpc3BsYXlJY29uLnRleHRDb250ZW50ID0gJ3dlYXRoZXIgdW5kZXRlY3RlZCc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlV2VhdGhlckljb247XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB1cGRhdGVXZWF0aGVySWNvbiBmcm9tICcuL3dlYXRoZXJDb25kaXRpb25zJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJBUEkgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZBUFBJRD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2AsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IHJlc3BvbnNlQVBJID0gYXdhaXQgd2VhdGhlckFQSS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlQVBJO1xuICB9IGNhdGNoIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHdlYXRoZXIgbm90IGZvdW5kIScpO1xuICB9XG59XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGNpdHkpIHtcbi8vICAgdHJ5IHtcbi8vICAgICBjb25zdCB3ZWF0aGVyQVBJID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgKTtcbi8vICAgICBjb25zdCByZXNwb25zZUFQSSA9IGF3YWl0IHdlYXRoZXJBUEkuanNvbigpO1xuLy8gICAgIHJldHVybiByZXNwb25zZUFQSTtcbi8vICAgfSBjYXRjaCB7XG4vLyAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciB3ZWF0aGVyIGZvcmVjYXN0IG5vdCBmb3VuZCEnKTtcbi8vICAgfVxuLy8gfVxuXG5mdW5jdGlvbiB0b2dnbGVEaXNwbGF5T25PZmYoc2VsZWN0b3IpIHtcbiAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgaWYgKGxheWVyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICBsYXllci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSBlbHNlIHtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVEaXNwbGF5T24oc2VsZWN0b3IpIHtcbiAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5mdW5jdGlvbiB0b2dnbGVEaXNwbGF5T2ZmKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiBsb2FkaW5nRXJyb3IobXNnLCBjb2RlKSB7XG4gIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmctZXJyb3InKTtcbiAgbGF5ZXIudGV4dENvbnRlbnQgPSBgRXJyb3Ike2NvZGV9KCR7bXNnfSkgcGxlYXNlIGNoZWNrIHlvdXIgaW5wdXQgYWdhaW5gO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzaG93V2VhdGhlcihjaXR5KSB7XG4gIGNvbnN0IHdlYXRoZXJDaXR5ID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5KTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIC8vIGNvbnN0IHdlYXRoZXJGb3JlY2FzdCA9IGF3YWl0IGdldEZvcmVjYXN0KGNpdHkpO1xuICB0cnkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsb3VkczogeyBhbGw6IGNsb3VkIH0sXG4gICAgICBuYW1lLFxuICAgICAgc3lzOiB7IGNvdW50cnkgfSxcbiAgICAgIG1haW46IHsgdGVtcCwgaHVtaWRpdHkgfSxcbiAgICAgIHdpbmQ6IHsgc3BlZWQgfSxcbiAgICB9ID0gd2VhdGhlckNpdHk7XG4gICAgY29uc3QgZGVzYyA9IHdlYXRoZXJDaXR5LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIGNvdW50cnksXG4gICAgICBjbG91ZCxcbiAgICAgIHRlbXA6IE1hdGgucm91bmQodGVtcCksXG4gICAgICBodW1pZGl0eSxcbiAgICAgIGRlc2MsXG4gICAgICBzcGVlZCxcbiAgICB9O1xuICB9IGNhdGNoIHtcbiAgICB0b2dnbGVEaXNwbGF5T25PZmYoJy5sb2FkaW5nLWNhcmQnKTtcbiAgICBsb2FkaW5nRXJyb3Iod2VhdGhlckNpdHkubWVzc2FnZSwgd2VhdGhlckNpdHkuY29kKTtcbiAgICB0b2dnbGVEaXNwbGF5T25PZmYoJy5sb2FkaW5nLWVycm9yJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKHdlYXRoZXJDaXR5Lm1lc3NhZ2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJUZXh0KHZhbCwgdGFyZ2V0KSB7IC8vICdbZGF0YT1cImRpc3BsYXlcIl0nXG4gIGNvbnN0IGRpc3BsYXlMYXllcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCk7XG4gIGRpc3BsYXlMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcbiAgICBjb25zdCBhcnJheXMgPSBbXG4gICAgICAnbmFtZScsXG4gICAgICAnY291bnRyeScsXG4gICAgICAndGVtcCcsXG4gICAgICAnaHVtaWRpdHknLFxuICAgICAgJ2Rlc2MnLFxuICAgICAgJ2Nsb3VkJyxcbiAgICAgICdzcGVlZCcsXG4gICAgXTtcbiAgICBhcnJheXMuZm9yRWFjaCgoYXJyYXkpID0+IHtcbiAgICAgIGlmIChsYXllci5jbGFzc0xpc3QuY29udGFpbnMoYXJyYXkpKSB7XG4gICAgICAgIGxheWVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGxheWVyLnRleHRDb250ZW50ID0gdmFsW2FycmF5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlucHV0Q2l0eVdlYXRoZXIoY2l0eSkge1xuICBzaG93V2VhdGhlcihjaXR5KS50aGVuKCh2YWwpID0+IHtcbiAgICB0b2dnbGVEaXNwbGF5T2ZmKCcubG9hZGluZy1jYXJkJyk7XG4gICAgdXBkYXRlV2VhdGhlclRleHQodmFsLCAnW2RhdGE9XCJkaXNwbGF5XCJdJyk7XG4gICAgdXBkYXRlV2VhdGhlckljb24odmFsLCAnLmRpc3BsYXkuaWNvbiBpbWcnKTtcbiAgICB0b2dnbGVEaXNwbGF5T25PZmYoJy53ZWF0aGVyLWNhcmQnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZXZWF0aGVyQ2FyZEFjdGl2ZSh0YXJnZXQpIHsgLy8gJy53ZWF0aGVyLWNhcmQnXG4gIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICBpZiAobGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIHRvZ2dsZURpc3BsYXlPbk9mZignLndlYXRoZXItY2FyZCcpO1xuICB9XG4gIGlmICghbGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIHRvZ2dsZURpc3BsYXlPbignLmxvYWRpbmctY2FyZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEV2ZW50KCkge1xuICBjb25zdCBpbnB1dENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRDaXR5Jyk7XG4gIGlucHV0Q2l0eVdlYXRoZXIoaW5wdXRDaXR5LnZhbHVlKTtcbiAgaW5wdXRDaXR5LnZhbHVlID0gbnVsbDtcbiAgdG9nZ2xlRGlzcGxheU9mZignLmxvYWRpbmctZXJyb3InKTtcbiAgY2hlY2tJZldlYXRoZXJDYXJkQWN0aXZlKCcud2VhdGhlci1jYXJkJyk7XG59XG5cbmZ1bmN0aW9uIHVzZXJTdWJtaXRDaXR5KCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzdWJtaXRFdmVudCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZGluZ0Rpc3BsYXkodGV4dCkge1xuICBjb25zdCBsYXllckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1jYXJkJyk7XG4gIGNvbnN0IGxheWVyQW5pbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLWFuaW1hdGlvbicpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhLmNsYXNzTmFtZSA9ICdsb2FkaW5nLWNhcmQtdGV4dCc7XG4gIHBhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBpbWFnZS5jbGFzc05hbWUgPSAnbG9hZGluZy1hbmltYXRpb24taW1nJztcbiAgaW1hZ2Uuc3JjID0gJy4vaW1nL2xvYWRpbmctMi5wbmcnO1xuICBsYXllckFuaW0uYXBwZW5kKGltYWdlKTtcbiAgbGF5ZXJDYXJkLmFwcGVuZChwYXJhKTtcbn1cblxudXNlclN1Ym1pdENpdHkoKTtcbmxvYWRpbmdEaXNwbGF5KCdQbGVhc2UgV2FpdCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9