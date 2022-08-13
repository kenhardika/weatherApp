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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBMEM7QUFDMUM7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7OztVQ3pEakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsS0FBSztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyRkFBMkYsS0FBSztBQUNoRztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLEtBQUssR0FBRyxJQUFJO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixZQUFZO0FBQzVCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWMsZ0JBQWdCO0FBQzlCLGNBQWMsT0FBTztBQUNyQixNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBaUI7QUFDckI7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3dlYXRoZXJDb25kaXRpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB1cGRhdGVXZWF0aGVySWNvbih2YWwsIHRhcmdldCkgeyAvLyB0YXJnZXQgPSAnLmRpc3BsYXkuaWNvbiBpbWcnXG4gIGNvbnN0IGRpc3BsYXlJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICBjb25zdCB7IGRlc2MgfSA9IHZhbDtcbiAgc3dpdGNoIChkZXNjKSB7XG4gICAgY2FzZSAnY2xlYXIgc2t5JzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9zdW4uc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ292ZXJjYXN0IGNsb3Vkcyc6XG4gICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvY2xvdWQtc3VuLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdmZXcgY2xvdWRzJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZHMuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Jyb2tlbiBjbG91ZHMnOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY2F0dGVyZWQgY2xvdWRzJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZHMuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RodW5kZXJzdG9ybSc6XG4gICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvY2xvdWQtbGlnaHRuaW5nLXJhaW4uc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xpZ2h0IHJhaW4nOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLWRyaXp6bGUuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21vZGVyYXRlIHJhaW4nOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLXJhaW4uc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Nob3dlciByYWluJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1yYWluLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdoZWF2eSByYWluJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1yYWluLWhlYXZ5LnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaXN0JzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1oYXplLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzbm93JzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1zbm93LnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsaWdodCBpbnRlbnNpdHkgc2hvd2VyIHJhaW4nOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLWRyaXp6bGUuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2hlYXZ5IGludGVuc2l0eSByYWluJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1yYWluLWhlYXZ5LnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdoZWF2eSBpbnRlbnNpdHkgc2hvd2VyIHJhaW4nOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLXJhaW4taGVhdnkuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2hhemUnOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLWhhemUuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBkaXNwbGF5SWNvbi50ZXh0Q29udGVudCA9ICd3ZWF0aGVyIHVuZGV0ZWN0ZWQnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZVdlYXRoZXJJY29uO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdXBkYXRlV2VhdGhlckljb24gZnJvbSAnLi93ZWF0aGVyQ29uZGl0aW9ucyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyQVBJID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJkFQUElEPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYCxcbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlQVBJID0gYXdhaXQgd2VhdGhlckFQSS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlQVBJO1xuICB9IGNhdGNoIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHdlYXRoZXIgbm90IGZvdW5kIScpO1xuICB9XG59XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGNpdHkpIHtcbi8vICAgdHJ5IHtcbi8vICAgICBjb25zdCB3ZWF0aGVyQVBJID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgKTtcbi8vICAgICBjb25zdCByZXNwb25zZUFQSSA9IGF3YWl0IHdlYXRoZXJBUEkuanNvbigpO1xuLy8gICAgIHJldHVybiByZXNwb25zZUFQSTtcbi8vICAgfSBjYXRjaCB7XG4vLyAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciB3ZWF0aGVyIGZvcmVjYXN0IG5vdCBmb3VuZCEnKTtcbi8vICAgfVxuLy8gfVxuXG5mdW5jdGlvbiB0b2dnbGVEaXNwbGF5T25PZmYoc2VsZWN0b3IpIHtcbiAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgaWYgKGxheWVyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICBsYXllci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSBlbHNlIHtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVEaXNwbGF5T24oc2VsZWN0b3IpIHtcbiAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5mdW5jdGlvbiB0b2dnbGVEaXNwbGF5T2ZmKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiBsb2FkaW5nRXJyb3IobXNnLCBjb2RlKSB7XG4gIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmctZXJyb3InKTtcbiAgbGF5ZXIudGV4dENvbnRlbnQgPSBgRXJyb3Ike2NvZGV9KCR7bXNnfSkgcGxlYXNlIGNoZWNrIHlvdXIgaW5wdXQgYWdhaW5gO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzaG93V2VhdGhlcihjaXR5KSB7XG4gIGNvbnN0IHdlYXRoZXJDaXR5ID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5KTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIC8vIGNvbnN0IHdlYXRoZXJGb3JlY2FzdCA9IGF3YWl0IGdldEZvcmVjYXN0KGNpdHkpO1xuICB0cnkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsb3VkczogeyBhbGw6IGNsb3VkIH0sXG4gICAgICBuYW1lLFxuICAgICAgc3lzOiB7IGNvdW50cnkgfSxcbiAgICAgIG1haW46IHsgdGVtcCwgaHVtaWRpdHkgfSxcbiAgICAgIHdpbmQ6IHsgc3BlZWQgfSxcbiAgICB9ID0gd2VhdGhlckNpdHk7XG4gICAgY29uc3QgZGVzYyA9IHdlYXRoZXJDaXR5LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIGNvdW50cnksXG4gICAgICBjbG91ZCxcbiAgICAgIHRlbXA6IE1hdGgucm91bmQodGVtcCksXG4gICAgICBodW1pZGl0eSxcbiAgICAgIGRlc2MsXG4gICAgICBzcGVlZCxcbiAgICB9O1xuICB9IGNhdGNoIHtcbiAgICB0b2dnbGVEaXNwbGF5T25PZmYoJy5sb2FkaW5nLWNhcmQnKTtcbiAgICBsb2FkaW5nRXJyb3Iod2VhdGhlckNpdHkubWVzc2FnZSwgd2VhdGhlckNpdHkuY29kKTtcbiAgICB0b2dnbGVEaXNwbGF5T25PZmYoJy5sb2FkaW5nLWVycm9yJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKHdlYXRoZXJDaXR5Lm1lc3NhZ2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJUZXh0KHZhbCwgdGFyZ2V0KSB7IC8vICdbZGF0YT1cImRpc3BsYXlcIl0nXG4gIGNvbnN0IGRpc3BsYXlMYXllcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCk7XG4gIGRpc3BsYXlMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcbiAgICBjb25zdCBhcnJheXMgPSBbXG4gICAgICAnbmFtZScsXG4gICAgICAnY291bnRyeScsXG4gICAgICAndGVtcCcsXG4gICAgICAnaHVtaWRpdHknLFxuICAgICAgJ2Rlc2MnLFxuICAgICAgJ2Nsb3VkJyxcbiAgICAgICdzcGVlZCcsXG4gICAgXTtcbiAgICBhcnJheXMuZm9yRWFjaCgoYXJyYXkpID0+IHtcbiAgICAgIGlmIChsYXllci5jbGFzc0xpc3QuY29udGFpbnMoYXJyYXkpKSB7XG4gICAgICAgIGxheWVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGxheWVyLnRleHRDb250ZW50ID0gdmFsW2FycmF5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlucHV0Q2l0eVdlYXRoZXIoY2l0eSkge1xuICBzaG93V2VhdGhlcihjaXR5KS50aGVuKCh2YWwpID0+IHtcbiAgICB0b2dnbGVEaXNwbGF5T2ZmKCcubG9hZGluZy1jYXJkJyk7XG4gICAgdXBkYXRlV2VhdGhlclRleHQodmFsLCAnW2RhdGE9XCJkaXNwbGF5XCJdJyk7XG4gICAgdXBkYXRlV2VhdGhlckljb24odmFsLCAnLmRpc3BsYXkuaWNvbiBpbWcnKTtcbiAgICB0b2dnbGVEaXNwbGF5T25PZmYoJy53ZWF0aGVyLWNhcmQnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZXZWF0aGVyQ2FyZEFjdGl2ZSh0YXJnZXQpIHsgLy8gJy53ZWF0aGVyLWNhcmQnXG4gIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICBpZiAobGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIHRvZ2dsZURpc3BsYXlPbk9mZignLndlYXRoZXItY2FyZCcpO1xuICB9XG4gIGlmICghbGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIHRvZ2dsZURpc3BsYXlPbignLmxvYWRpbmctY2FyZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEV2ZW50KCkge1xuICBjb25zdCBpbnB1dENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRDaXR5Jyk7XG4gIGlucHV0Q2l0eVdlYXRoZXIoaW5wdXRDaXR5LnZhbHVlKTtcbiAgaW5wdXRDaXR5LnZhbHVlID0gbnVsbDtcbiAgdG9nZ2xlRGlzcGxheU9mZignLmxvYWRpbmctZXJyb3InKTtcbiAgY2hlY2tJZldlYXRoZXJDYXJkQWN0aXZlKCcud2VhdGhlci1jYXJkJyk7XG59XG5cbmZ1bmN0aW9uIHVzZXJTdWJtaXRDaXR5KCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzdWJtaXRFdmVudCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZGluZ0Rpc3BsYXkodGV4dCkge1xuICBjb25zdCBsYXllckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1jYXJkJyk7XG4gIGNvbnN0IGxheWVyQW5pbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLWFuaW1hdGlvbicpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhLmNsYXNzTmFtZSA9ICdsb2FkaW5nLWNhcmQtdGV4dCc7XG4gIHBhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBpbWFnZS5jbGFzc05hbWUgPSAnbG9hZGluZy1hbmltYXRpb24taW1nJztcbiAgaW1hZ2Uuc3JjID0gJy4vaW1nL2xvYWRpbmctMi5wbmcnO1xuICBsYXllckFuaW0uYXBwZW5kKGltYWdlKTtcbiAgbGF5ZXJDYXJkLmFwcGVuZChwYXJhKTtcbn1cblxudXNlclN1Ym1pdENpdHkoKTtcbmxvYWRpbmdEaXNwbGF5KCdQbGVhc2UgV2FpdCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9