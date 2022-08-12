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
    displayLayers.forEach((layer)=>{
        const arrays = ['name', 'country', 'temp', 'humidity', 'desc', 'cloud', 'speed'];
        arrays.forEach((array)=> {
            if(layer.classList.contains(array)){
                layer.textContent='';
                layer.textContent = val[array];
            }
        })
    })
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

loadingDisplay('Please Wait');

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
        // toggleDisplayOn('.loading-animation');
    }
}

userSubmitCity()
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0EseUZBQXlGLEtBQUs7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBGQUEwRixLQUFLO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixXQUFXLGFBQWEsUUFBUTtBQUN6RCxzQkFBc0IsZUFBZSxRQUFRO0FBQzdDLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxLQUFLLEdBQUcsSUFBSTtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpe1xuICAgIHRyeXtcbiAgICAgICAgbGV0IHdlYXRoZXJBUEkgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJkFQUElEPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYCk7XG4gICAgICAgIGxldCByZXNwb25zZUFQSSA9IGF3YWl0IHdlYXRoZXJBUEkuanNvbigpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VBUElcbiAgICB9XG4gICAgY2F0Y2h7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXJyb3Igd2VhdGhlciBub3QgZm91bmQhJylcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGNpdHkpe1xuICAgIHRyeXtcbiAgICAgICAgbGV0IHdlYXRoZXJBUEkgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2ApO1xuICAgICAgICBsZXQgcmVzcG9uc2VBUEkgPSBhd2FpdCB3ZWF0aGVyQVBJLmpzb24oKTsgXG4gICAgICAgIHJldHVybiByZXNwb25zZUFQSVxuICAgIH1cbiAgICBjYXRjaHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciB3ZWF0aGVyIGZvcmVjYXN0IG5vdCBmb3VuZCEnKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2hvd1dlYXRoZXIoY2l0eSl7XG4gICAgbGV0IHdlYXRoZXJDaXR5ID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5KTtcbiAgICBsZXQgd2VhdGhlckZvcmVjYXN0ID0gYXdhaXQgZ2V0Rm9yZWNhc3QoY2l0eSk7XG4gICAgdHJ5IHsgXG4gICAgICAgY29uc29sZS5sb2cod2VhdGhlckNpdHkpXG4gICAgICAgICAgICBjb25zdCB7IFxuICAgICAgICAgICAgICAgIGNsb3Vkczp7IGFsbDpjbG91ZCB9LCBuYW1lLCBzeXM6e2NvdW50cnl9LFxuICAgICAgICAgICAgICAgIG1haW46e3RlbXAsIGh1bWlkaXR5fSwgd2luZDp7c3BlZWR9IFxuICAgICAgICAgICAgfSA9IHdlYXRoZXJDaXR5O1xuICAgICAgICAgICAgY29uc3QgZGVzYyA9IHdlYXRoZXJDaXR5LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGNvdW50cnksIFxuICAgICAgICAgICAgICAgIGNsb3VkLCBcbiAgICAgICAgICAgICAgICB0ZW1wOiBNYXRoLnJvdW5kKHRlbXApLFxuICAgICAgICAgICAgICAgIGh1bWlkaXR5LCBcbiAgICAgICAgICAgICAgICBkZXNjLFxuICAgICAgICAgICAgICAgIHNwZWVkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBjYXRjaHtcbiAgICAgICAgdG9nZ2xlRGlzcGxheU9uT2ZmKCcubG9hZGluZy1jYXJkJyk7XG4gICAgICAgIGxvYWRpbmdFcnJvcih3ZWF0aGVyQ2l0eS5tZXNzYWdlLCB3ZWF0aGVyQ2l0eS5jb2QpO1xuICAgICAgICB0b2dnbGVEaXNwbGF5T25PZmYoJy5sb2FkaW5nLWVycm9yJyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcih3ZWF0aGVyQ2l0eS5tZXNzYWdlKTsgXG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVEaXNwbGF5T25PZmYoc2VsZWN0b3Ipe1xuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKGxheWVyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xuICAgICAgICBsYXllci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVEaXNwbGF5T24oc2VsZWN0b3Ipe1xuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5mdW5jdGlvbiB0b2dnbGVEaXNwbGF5T2ZmKHNlbGVjdG9yKXtcbiAgICBjb25zdCBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9ET00odmFsKXtcbiAgICBjb25zdCBkaXNwbGF5TGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGE9XCJkaXNwbGF5XCJdJyk7XG4gICAgZGlzcGxheUxheWVycy5mb3JFYWNoKChsYXllcik9PntcbiAgICAgICAgY29uc3QgYXJyYXlzID0gWyduYW1lJywgJ2NvdW50cnknLCAndGVtcCcsICdodW1pZGl0eScsICdkZXNjJywgJ2Nsb3VkJywgJ3NwZWVkJ107XG4gICAgICAgIGFycmF5cy5mb3JFYWNoKChhcnJheSk9PiB7XG4gICAgICAgICAgICBpZihsYXllci5jbGFzc0xpc3QuY29udGFpbnMoYXJyYXkpKXtcbiAgICAgICAgICAgICAgICBsYXllci50ZXh0Q29udGVudD0nJztcbiAgICAgICAgICAgICAgICBsYXllci50ZXh0Q29udGVudCA9IHZhbFthcnJheV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaW5wdXRDaXR5V2VhdGhlcihjaXR5KSB7XG4gICAgc2hvd1dlYXRoZXIoY2l0eSlcbiAgICAgICAgLnRoZW4oKHZhbCk9PiB7XG4gICAgICAgICAgICB0b2dnbGVEaXNwbGF5T2ZmKCcubG9hZGluZy1jYXJkJyk7XG4gICAgICAgICAgICBkaXNwbGF5VG9ET00odmFsKTtcbiAgICAgICAgICAgIHRvZ2dsZURpc3BsYXlPbk9mZignLndlYXRoZXItY2FyZCcpO1xuICAgICAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIHVzZXJTdWJtaXRDaXR5KCl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT57IFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Ym1pdEV2ZW50KCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRpbmdEaXNwbGF5KHRleHQpe1xuICAgIGNvbnN0IGxheWVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLWNhcmQnKTtcbiAgICBjb25zdCBsYXllckFuaW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1hbmltYXRpb24nKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS5jbGFzc05hbWUgPSAnbG9hZGluZy1jYXJkLXRleHQnO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGltYWdlLmNsYXNzTmFtZT0nbG9hZGluZy1hbmltYXRpb24taW1nJztcbiAgICBpbWFnZS5zcmM9YC4vaW1nL2xvYWRpbmcucG5nYDtcbiAgICBsYXllckFuaW0uYXBwZW5kKGltYWdlKTtcbiAgICBsYXllckNhcmQuYXBwZW5kKHBhcmEpO1xufVxuXG5sb2FkaW5nRGlzcGxheSgnUGxlYXNlIFdhaXQnKTtcblxuZnVuY3Rpb24gbG9hZGluZ0Vycm9yKG1zZywgY29kZSl7XG4gICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1lcnJvcicpO1xuICAgIGxheWVyLnRleHRDb250ZW50ID0gYEVycm9yJHtjb2RlfSgke21zZ30pIHBsZWFzZSBjaGVjayB5b3VyIGlucHV0IGFnYWluYDtcbn1cblxuZnVuY3Rpb24gY2xlYXJJbnB1dChpbnB1dCl7XG4gICByZXR1cm4gaW5wdXQudmFsdWUgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRFdmVudCgpe1xuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2FyZCcpO1xuICAgIGNvbnN0IGlucHV0Q2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dENpdHknKTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dENpdHkudmFsdWUpO1xuICAgIHRvZ2dsZURpc3BsYXlPZmYoJy5sb2FkaW5nLWVycm9yJyk7XG5cbiAgICBpbnB1dENpdHlXZWF0aGVyKGlucHV0Q2l0eS52YWx1ZSk7XG4gICAgY2xlYXJJbnB1dChpbnB1dENpdHkpO1xuXG4gICAgaWYobGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XG4gICAgICAgIHRvZ2dsZURpc3BsYXlPbk9mZignLndlYXRoZXItY2FyZCcpO1xuICAgIH1cbiAgICBpZiAoIWxheWVyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xuICAgICAgICB0b2dnbGVEaXNwbGF5T24oJy5sb2FkaW5nLWNhcmQnKTtcbiAgICAgICAgLy8gdG9nZ2xlRGlzcGxheU9uKCcubG9hZGluZy1hbmltYXRpb24nKTtcbiAgICB9XG59XG5cbnVzZXJTdWJtaXRDaXR5KCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=