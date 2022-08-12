/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
async function getWeather(city){
    try{
        let weatherAPI = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=a13d8edf32d7b9d01229e1749c07fcdc`);
        let responseAPI = await weatherAPI.json();
        return responseAPI
    }
    catch{
        throw new Error('error weather not found!')
    }
}

async function getForecast(city){
    try{
        let weatherAPI = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=a13d8edf32d7b9d01229e1749c07fcdc`);
        let responseAPI = await weatherAPI.json(); 
        return responseAPI
    }
    catch{
        throw new Error('error weather forecast not found!')
    }
}

async function showWeather(city){
    let weatherCity = await getWeather(city);
    let weatherForecast = await getForecast(city);
    try { 
       console.log(weatherCity)
            const { 
                clouds:{ all:cloud }, name, sys:{country},
                main:{temp, humidity}, wind:{speed} 
            } = weatherCity;
            const desc = weatherCity.weather[0].description;
            
            return{
                name,
                country, 
                cloud, 
                temp: Math.round(temp),
                humidity, 
                desc,
                speed
            }
        }
    catch{
        toggleDisplayOnOff('.loading-card');
        loadingError(weatherCity.message, weatherCity.cod);
        toggleDisplayOnOff('.loading-error');
        throw new Error(weatherCity.message); 
    }
}

function toggleDisplayOnOff(selector){
    const layer = document.querySelector(selector);
    if (layer.classList.contains('active')){
        layer.classList.remove('active');
    }
    else{
        layer.classList.add('active');
    }
}

function toggleDisplayOn(selector){
    const layer = document.querySelector(selector);
    layer.classList.add('active');
}
function toggleDisplayOff(selector){
    const layer = document.querySelector(selector);
    layer.classList.remove('active');
}

function displayToDOM(val){
    const displayLayers = document.querySelectorAll('[data="display"]');
    const displayIcon = document.querySelector('.display.icon img');
    displayLayers.forEach((layer)=>{
        const arrays = ['name', 'country', 'temp', 'humidity', 'desc', 'cloud', 'speed'];
        arrays.forEach((array)=> {
            if(layer.classList.contains(array)){
                layer.textContent='';
                layer.textContent = val[array];
            }
        })
    })
    let desc = val.desc;
    switch (desc){
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
        default:
            displayIcon.textContent = 'weather undetected';
    }

}

function inputCityWeather(city) {
    showWeather(city)
        .then((val)=> {
            toggleDisplayOff('.loading-card');
            displayToDOM(val);
            toggleDisplayOnOff('.weather-card');
            });
}

function userSubmitCity(){
    document.addEventListener('submit', (e)=>{ 
        e.preventDefault();
        submitEvent();
    });
}

function loadingDisplay(text){
    const layerCard = document.querySelector('.loading-card');
    const layerAnim = document.querySelector('.loading-animation');
    const image = document.createElement('img');
    const para = document.createElement('p');
    para.className = 'loading-card-text';
    para.textContent = text;
    image.className='loading-animation-img';
    image.src=`./img/loading.png`;
    layerAnim.append(image);
    layerCard.append(para);
}


function loadingError(msg, code){
    const layer = document.querySelector('.loading-error');
    layer.textContent = `Error${code}(${msg}) please check your input again`;
}

function clearInput(input){
   return input.value = null;
}

function submitEvent(){
    const layer = document.querySelector('.weather-card');
    const inputCity = document.querySelector('.inputCity');
    console.log(inputCity.value);
    toggleDisplayOff('.loading-error');

    inputCityWeather(inputCity.value);
    clearInput(inputCity);

    if(layer.classList.contains('active')){
        toggleDisplayOnOff('.weather-card');
    }
    if (!layer.classList.contains('active')){
        toggleDisplayOn('.loading-card');
    }
}

userSubmitCity();
loadingDisplay('Please Wait');

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0EseUZBQXlGLEtBQUs7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBGQUEwRixLQUFLO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixXQUFXLGFBQWEsUUFBUTtBQUN6RCxzQkFBc0IsZUFBZSxRQUFRO0FBQzdDLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsZ0NBQWdDLEtBQUssR0FBRyxJQUFJO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgd2VhdGhlckFQSSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmQVBQSUQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlQVBJID0gYXdhaXQgd2VhdGhlckFQSS5qc29uKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZUFQSVxuICAgIH1cbiAgICBjYXRjaHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciB3ZWF0aGVyIG5vdCBmb3VuZCEnKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QoY2l0eSl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgd2VhdGhlckFQSSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYCk7XG4gICAgICAgIGxldCByZXNwb25zZUFQSSA9IGF3YWl0IHdlYXRoZXJBUEkuanNvbigpOyBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlQVBJXG4gICAgfVxuICAgIGNhdGNoe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHdlYXRoZXIgZm9yZWNhc3Qgbm90IGZvdW5kIScpXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzaG93V2VhdGhlcihjaXR5KXtcbiAgICBsZXQgd2VhdGhlckNpdHkgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHkpO1xuICAgIGxldCB3ZWF0aGVyRm9yZWNhc3QgPSBhd2FpdCBnZXRGb3JlY2FzdChjaXR5KTtcbiAgICB0cnkgeyBcbiAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyQ2l0eSlcbiAgICAgICAgICAgIGNvbnN0IHsgXG4gICAgICAgICAgICAgICAgY2xvdWRzOnsgYWxsOmNsb3VkIH0sIG5hbWUsIHN5czp7Y291bnRyeX0sXG4gICAgICAgICAgICAgICAgbWFpbjp7dGVtcCwgaHVtaWRpdHl9LCB3aW5kOntzcGVlZH0gXG4gICAgICAgICAgICB9ID0gd2VhdGhlckNpdHk7XG4gICAgICAgICAgICBjb25zdCBkZXNjID0gd2VhdGhlckNpdHkud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgY291bnRyeSwgXG4gICAgICAgICAgICAgICAgY2xvdWQsIFxuICAgICAgICAgICAgICAgIHRlbXA6IE1hdGgucm91bmQodGVtcCksXG4gICAgICAgICAgICAgICAgaHVtaWRpdHksIFxuICAgICAgICAgICAgICAgIGRlc2MsXG4gICAgICAgICAgICAgICAgc3BlZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGNhdGNoe1xuICAgICAgICB0b2dnbGVEaXNwbGF5T25PZmYoJy5sb2FkaW5nLWNhcmQnKTtcbiAgICAgICAgbG9hZGluZ0Vycm9yKHdlYXRoZXJDaXR5Lm1lc3NhZ2UsIHdlYXRoZXJDaXR5LmNvZCk7XG4gICAgICAgIHRvZ2dsZURpc3BsYXlPbk9mZignLmxvYWRpbmctZXJyb3InKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHdlYXRoZXJDaXR5Lm1lc3NhZ2UpOyBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURpc3BsYXlPbk9mZihzZWxlY3Rvcil7XG4gICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAobGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XG4gICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURpc3BsYXlPbihzZWxlY3Rvcil7XG4gICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZURpc3BsYXlPZmYoc2VsZWN0b3Ipe1xuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb0RPTSh2YWwpe1xuICAgIGNvbnN0IGRpc3BsYXlMYXllcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YT1cImRpc3BsYXlcIl0nKTtcbiAgICBjb25zdCBkaXNwbGF5SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5Lmljb24gaW1nJyk7XG4gICAgZGlzcGxheUxheWVycy5mb3JFYWNoKChsYXllcik9PntcbiAgICAgICAgY29uc3QgYXJyYXlzID0gWyduYW1lJywgJ2NvdW50cnknLCAndGVtcCcsICdodW1pZGl0eScsICdkZXNjJywgJ2Nsb3VkJywgJ3NwZWVkJ107XG4gICAgICAgIGFycmF5cy5mb3JFYWNoKChhcnJheSk9PiB7XG4gICAgICAgICAgICBpZihsYXllci5jbGFzc0xpc3QuY29udGFpbnMoYXJyYXkpKXtcbiAgICAgICAgICAgICAgICBsYXllci50ZXh0Q29udGVudD0nJztcbiAgICAgICAgICAgICAgICBsYXllci50ZXh0Q29udGVudCA9IHZhbFthcnJheV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBsZXQgZGVzYyA9IHZhbC5kZXNjO1xuICAgIHN3aXRjaCAoZGVzYyl7XG4gICAgICAgIGNhc2UgJ2NsZWFyIHNreSc6XG4gICAgICAgICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvc3VuLnN2Zyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb3ZlcmNhc3QgY2xvdWRzJzpcbiAgICAgICAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1zdW4uc3ZnJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmZXcgY2xvdWRzJzpcbiAgICAgICAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZHMuc3ZnJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdicm9rZW4gY2xvdWRzJzpcbiAgICAgICAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC5zdmcnO1xuICAgICAgICAgICAgYnJlYWs7ICAgICAgICBcbiAgICAgICAgY2FzZSAnc2NhdHRlcmVkIGNsb3Vkcyc6XG4gICAgICAgICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvY2xvdWRzLnN2Zyc7XG4gICAgICAgICAgICBicmVhazsgICAgICAgIFxuICAgICAgICBjYXNlICd0aHVuZGVyc3Rvcm0nOlxuICAgICAgICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLWxpZ2h0bmluZy1yYWluLnN2Zyc7XG4gICAgICAgICAgICBicmVhazsgICAgICAgICAgIFxuICAgICAgICBjYXNlICdsaWdodCByYWluJzpcbiAgICAgICAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1kcml6emxlLnN2Zyc7XG4gICAgICAgICAgICBicmVhazsgICAgICAgIFxuICAgICAgICBjYXNlICdtb2RlcmF0ZSByYWluJzpcbiAgICAgICAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1yYWluLnN2Zyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaGVhdnkgcmFpbic6XG4gICAgICAgICAgICBkaXNwbGF5SWNvbi5zcmMgPSAnLi9pbWcvY2xvdWQtcmFpbi1oZWF2eS5zdmcnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21pc3QnOlxuICAgICAgICAgICAgZGlzcGxheUljb24uc3JjID0gJy4vaW1nL2Nsb3VkLWhhemUuc3ZnJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzbm93JzpcbiAgICAgICAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1zbm93LnN2Zyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGlnaHQgaW50ZW5zaXR5IHNob3dlciByYWluJzpcbiAgICAgICAgICAgIGRpc3BsYXlJY29uLnNyYyA9ICcuL2ltZy9jbG91ZC1kcml6emxlLnN2Zyc7XG4gICAgICAgICAgICBicmVhazsgICAgICAgIFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZGlzcGxheUljb24udGV4dENvbnRlbnQgPSAnd2VhdGhlciB1bmRldGVjdGVkJztcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gaW5wdXRDaXR5V2VhdGhlcihjaXR5KSB7XG4gICAgc2hvd1dlYXRoZXIoY2l0eSlcbiAgICAgICAgLnRoZW4oKHZhbCk9PiB7XG4gICAgICAgICAgICB0b2dnbGVEaXNwbGF5T2ZmKCcubG9hZGluZy1jYXJkJyk7XG4gICAgICAgICAgICBkaXNwbGF5VG9ET00odmFsKTtcbiAgICAgICAgICAgIHRvZ2dsZURpc3BsYXlPbk9mZignLndlYXRoZXItY2FyZCcpO1xuICAgICAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJTdWJtaXRDaXR5KCl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT57IFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Ym1pdEV2ZW50KCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRpbmdEaXNwbGF5KHRleHQpe1xuICAgIGNvbnN0IGxheWVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLWNhcmQnKTtcbiAgICBjb25zdCBsYXllckFuaW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1hbmltYXRpb24nKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS5jbGFzc05hbWUgPSAnbG9hZGluZy1jYXJkLXRleHQnO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGltYWdlLmNsYXNzTmFtZT0nbG9hZGluZy1hbmltYXRpb24taW1nJztcbiAgICBpbWFnZS5zcmM9YC4vaW1nL2xvYWRpbmcucG5nYDtcbiAgICBsYXllckFuaW0uYXBwZW5kKGltYWdlKTtcbiAgICBsYXllckNhcmQuYXBwZW5kKHBhcmEpO1xufVxuXG5cbmZ1bmN0aW9uIGxvYWRpbmdFcnJvcihtc2csIGNvZGUpe1xuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmctZXJyb3InKTtcbiAgICBsYXllci50ZXh0Q29udGVudCA9IGBFcnJvciR7Y29kZX0oJHttc2d9KSBwbGVhc2UgY2hlY2sgeW91ciBpbnB1dCBhZ2FpbmA7XG59XG5cbmZ1bmN0aW9uIGNsZWFySW5wdXQoaW5wdXQpe1xuICAgcmV0dXJuIGlucHV0LnZhbHVlID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gc3VibWl0RXZlbnQoKXtcbiAgICBjb25zdCBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNhcmQnKTtcbiAgICBjb25zdCBpbnB1dENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRDaXR5Jyk7XG4gICAgY29uc29sZS5sb2coaW5wdXRDaXR5LnZhbHVlKTtcbiAgICB0b2dnbGVEaXNwbGF5T2ZmKCcubG9hZGluZy1lcnJvcicpO1xuXG4gICAgaW5wdXRDaXR5V2VhdGhlcihpbnB1dENpdHkudmFsdWUpO1xuICAgIGNsZWFySW5wdXQoaW5wdXRDaXR5KTtcblxuICAgIGlmKGxheWVyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xuICAgICAgICB0b2dnbGVEaXNwbGF5T25PZmYoJy53ZWF0aGVyLWNhcmQnKTtcbiAgICB9XG4gICAgaWYgKCFsYXllci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcbiAgICAgICAgdG9nZ2xlRGlzcGxheU9uKCcubG9hZGluZy1jYXJkJyk7XG4gICAgfVxufVxuXG51c2VyU3VibWl0Q2l0eSgpO1xubG9hZGluZ0Rpc3BsYXkoJ1BsZWFzZSBXYWl0Jyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=