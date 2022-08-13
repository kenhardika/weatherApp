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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBMEM7QUFDMUM7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7OztVQ3REakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsS0FBSztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyRkFBMkYsS0FBSztBQUNoRztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLEtBQUssR0FBRyxJQUFJO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixZQUFZO0FBQzVCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWMsZ0JBQWdCO0FBQzlCLGNBQWMsT0FBTztBQUNyQixNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBaUI7QUFDckI7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3dlYXRoZXJDb25kaXRpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB1cGRhdGVXZWF0aGVySWNvbih2YWwsIHRhcmdldCkgeyAvLyB0YXJnZXQgPSAnLmRpc3BsYXkuaWNvbiBpbWcnXG4gIGNvbnN0IGRpc3BsYXlJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICBjb25zdCB7IGRlc2MgfSA9IHZhbDtcbiAgc3dpdGNoIChkZXNjKSB7XG4gICAgY2FzZSAnY2xlYXIgc2t5JzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9zdW4uc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ292ZXJjYXN0IGNsb3Vkcyc6XG4gICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvY2xvdWQtc3VuLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdmZXcgY2xvdWRzJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZHMuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Jyb2tlbiBjbG91ZHMnOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY2F0dGVyZWQgY2xvdWRzJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZHMuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RodW5kZXJzdG9ybSc6XG4gICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvY2xvdWQtbGlnaHRuaW5nLXJhaW4uc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xpZ2h0IHJhaW4nOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLWRyaXp6bGUuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21vZGVyYXRlIHJhaW4nOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLXJhaW4uc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Nob3dlciByYWluJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1yYWluLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdoZWF2eSByYWluJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1yYWluLWhlYXZ5LnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaXN0JzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1oYXplLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzbm93JzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1zbm93LnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsaWdodCBpbnRlbnNpdHkgc2hvd2VyIHJhaW4nOlxuICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLWRyaXp6bGUuc3ZnJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2hlYXZ5IGludGVuc2l0eSByYWluJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1yYWluLWhlYXZ5LnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdoYXplJzpcbiAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1oYXplLnN2Zyc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZGlzcGxheUljb24udGV4dENvbnRlbnQgPSAnd2VhdGhlciB1bmRldGVjdGVkJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVXZWF0aGVySWNvbjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHVwZGF0ZVdlYXRoZXJJY29uIGZyb20gJy4vd2VhdGhlckNvbmRpdGlvbnMnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlckFQSSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZBUFBJRD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2AsXG4gICAgKTtcbiAgICBjb25zdCByZXNwb25zZUFQSSA9IGF3YWl0IHdlYXRoZXJBUEkuanNvbigpO1xuICAgIHJldHVybiByZXNwb25zZUFQSTtcbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciB3ZWF0aGVyIG5vdCBmb3VuZCEnKTtcbiAgfVxufVxuXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChjaXR5KSB7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3Qgd2VhdGhlckFQSSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYCk7XG4vLyAgICAgY29uc3QgcmVzcG9uc2VBUEkgPSBhd2FpdCB3ZWF0aGVyQVBJLmpzb24oKTtcbi8vICAgICByZXR1cm4gcmVzcG9uc2VBUEk7XG4vLyAgIH0gY2F0Y2gge1xuLy8gICAgIHRocm93IG5ldyBFcnJvcignZXJyb3Igd2VhdGhlciBmb3JlY2FzdCBub3QgZm91bmQhJyk7XG4vLyAgIH1cbi8vIH1cblxuZnVuY3Rpb24gdG9nZ2xlRGlzcGxheU9uT2ZmKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIGlmIChsYXllci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGlzcGxheU9uKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuZnVuY3Rpb24gdG9nZ2xlRGlzcGxheU9mZihzZWxlY3Rvcikge1xuICBjb25zdCBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICBsYXllci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gbG9hZGluZ0Vycm9yKG1zZywgY29kZSkge1xuICBjb25zdCBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLWVycm9yJyk7XG4gIGxheWVyLnRleHRDb250ZW50ID0gYEVycm9yJHtjb2RlfSgke21zZ30pIHBsZWFzZSBjaGVjayB5b3VyIGlucHV0IGFnYWluYDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2hvd1dlYXRoZXIoY2l0eSkge1xuICBjb25zdCB3ZWF0aGVyQ2l0eSA9IGF3YWl0IGdldFdlYXRoZXIoY2l0eSk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAvLyBjb25zdCB3ZWF0aGVyRm9yZWNhc3QgPSBhd2FpdCBnZXRGb3JlY2FzdChjaXR5KTtcbiAgdHJ5IHtcbiAgICBjb25zdCB7XG4gICAgICBjbG91ZHM6IHsgYWxsOiBjbG91ZCB9LFxuICAgICAgbmFtZSxcbiAgICAgIHN5czogeyBjb3VudHJ5IH0sXG4gICAgICBtYWluOiB7IHRlbXAsIGh1bWlkaXR5IH0sXG4gICAgICB3aW5kOiB7IHNwZWVkIH0sXG4gICAgfSA9IHdlYXRoZXJDaXR5O1xuICAgIGNvbnN0IGRlc2MgPSB3ZWF0aGVyQ2l0eS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBjb3VudHJ5LFxuICAgICAgY2xvdWQsXG4gICAgICB0ZW1wOiBNYXRoLnJvdW5kKHRlbXApLFxuICAgICAgaHVtaWRpdHksXG4gICAgICBkZXNjLFxuICAgICAgc3BlZWQsXG4gICAgfTtcbiAgfSBjYXRjaCB7XG4gICAgdG9nZ2xlRGlzcGxheU9uT2ZmKCcubG9hZGluZy1jYXJkJyk7XG4gICAgbG9hZGluZ0Vycm9yKHdlYXRoZXJDaXR5Lm1lc3NhZ2UsIHdlYXRoZXJDaXR5LmNvZCk7XG4gICAgdG9nZ2xlRGlzcGxheU9uT2ZmKCcubG9hZGluZy1lcnJvcicpO1xuICAgIHRocm93IG5ldyBFcnJvcih3ZWF0aGVyQ2l0eS5tZXNzYWdlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVXZWF0aGVyVGV4dCh2YWwsIHRhcmdldCkgeyAvLyAnW2RhdGE9XCJkaXNwbGF5XCJdJ1xuICBjb25zdCBkaXNwbGF5TGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpO1xuICBkaXNwbGF5TGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XG4gICAgY29uc3QgYXJyYXlzID0gW1xuICAgICAgJ25hbWUnLFxuICAgICAgJ2NvdW50cnknLFxuICAgICAgJ3RlbXAnLFxuICAgICAgJ2h1bWlkaXR5JyxcbiAgICAgICdkZXNjJyxcbiAgICAgICdjbG91ZCcsXG4gICAgICAnc3BlZWQnLFxuICAgIF07XG4gICAgYXJyYXlzLmZvckVhY2goKGFycmF5KSA9PiB7XG4gICAgICBpZiAobGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKGFycmF5KSkge1xuICAgICAgICBsYXllci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBsYXllci50ZXh0Q29udGVudCA9IHZhbFthcnJheV07XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbnB1dENpdHlXZWF0aGVyKGNpdHkpIHtcbiAgc2hvd1dlYXRoZXIoY2l0eSkudGhlbigodmFsKSA9PiB7XG4gICAgdG9nZ2xlRGlzcGxheU9mZignLmxvYWRpbmctY2FyZCcpO1xuICAgIHVwZGF0ZVdlYXRoZXJUZXh0KHZhbCwgJ1tkYXRhPVwiZGlzcGxheVwiXScpO1xuICAgIHVwZGF0ZVdlYXRoZXJJY29uKHZhbCwgJy5kaXNwbGF5Lmljb24gaW1nJyk7XG4gICAgdG9nZ2xlRGlzcGxheU9uT2ZmKCcud2VhdGhlci1jYXJkJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmV2VhdGhlckNhcmRBY3RpdmUodGFyZ2V0KSB7IC8vICcud2VhdGhlci1jYXJkJ1xuICBjb25zdCBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgaWYgKGxheWVyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICB0b2dnbGVEaXNwbGF5T25PZmYoJy53ZWF0aGVyLWNhcmQnKTtcbiAgfVxuICBpZiAoIWxheWVyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICB0b2dnbGVEaXNwbGF5T24oJy5sb2FkaW5nLWNhcmQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdWJtaXRFdmVudCgpIHtcbiAgY29uc3QgaW5wdXRDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Q2l0eScpO1xuICBpbnB1dENpdHlXZWF0aGVyKGlucHV0Q2l0eS52YWx1ZSk7XG4gIGlucHV0Q2l0eS52YWx1ZSA9IG51bGw7XG4gIHRvZ2dsZURpc3BsYXlPZmYoJy5sb2FkaW5nLWVycm9yJyk7XG4gIGNoZWNrSWZXZWF0aGVyQ2FyZEFjdGl2ZSgnLndlYXRoZXItY2FyZCcpO1xufVxuXG5mdW5jdGlvbiB1c2VyU3VibWl0Q2l0eSgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc3VibWl0RXZlbnQoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRpbmdEaXNwbGF5KHRleHQpIHtcbiAgY29uc3QgbGF5ZXJDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmctY2FyZCcpO1xuICBjb25zdCBsYXllckFuaW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1hbmltYXRpb24nKTtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYS5jbGFzc05hbWUgPSAnbG9hZGluZy1jYXJkLXRleHQnO1xuICBwYXJhLnRleHRDb250ZW50ID0gdGV4dDtcbiAgaW1hZ2UuY2xhc3NOYW1lID0gJ2xvYWRpbmctYW5pbWF0aW9uLWltZyc7XG4gIGltYWdlLnNyYyA9ICcuL2ltZy9sb2FkaW5nLTIucG5nJztcbiAgbGF5ZXJBbmltLmFwcGVuZChpbWFnZSk7XG4gIGxheWVyQ2FyZC5hcHBlbmQocGFyYSk7XG59XG5cbnVzZXJTdWJtaXRDaXR5KCk7XG5sb2FkaW5nRGlzcGxheSgnUGxlYXNlIFdhaXQnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==