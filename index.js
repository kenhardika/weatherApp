/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
//http://api.openweathermap.org/data/2.5/weather?q=London&APPID=a13d8edf32d7b9d01229e1749c07fcdc
//`http://api.openweathermap.org/data/2.5/forecast?lat=-6.8722&lon=107.5425&appid=a13d8edf32d7b9d01229e1749c07fcdc`



// weather now use `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=a13d8edf32d7b9d01229e1749c07fcdc`;
// forecast use `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=a13d8edf32d7b9d01229e1749c07fcdc`


async function getWeather(city){
    try{
        let weatherAPI = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=a13d8edf32d7b9d01229e1749c07fcdc`);
        let responseAPI = await weatherAPI.json();
        return responseAPI
    }
    catch{
        // console.log('error get weather')
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
        // console.log(weatherCity.weather[0].description);
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
        //console.log(weatherCity.message + 'error code: '+ weatherCity.cod);
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
    console.log(displayLayers);
    console.log(val);
    displayLayers.forEach((layer)=>{
        const arrays = ['name', 'country', 'temp', 'humidity', 'desc', 'cloud', 'speed'];
        arrays.forEach((array)=> {
            if(layer.classList.contains(array)){
                layer.textContent='';
                layer.textContent = val[array];
            }
        })
        // layer.textContent= val[];
    })
}

function inputCityWeather(city, layer) {
    
    showWeather(city)
        .then((val)=> {
            toggleDisplayOff('.loading-card');
            // console.log('city: ' + val.name)
            // console.log('temp: '+ val.temp + '°C')
            // console.log('humidity: ' + val.humidity + '%')
            // console.log('description: ' + val.desc)
            // console.log('cloud percentage: '+ val.cloud + '%')
            // console.log('wind speed: '+ val.speed + ' kph')
            displayToDOM(val);
            toggleDisplayOnOff('.weather-card');
            })
        .catch((mes)=> console.log(mes));
}

function userSubmitCity(){
    document.addEventListener('submit', (e)=>{ 
        submitEvent();
        e.preventDefault();
    });
}

function clearInput(input){
   return input.value = null;
}

function submitEvent(){
    const layer = document.querySelector('.weather-card');
    const inputCity = document.querySelector('.inputCity');
    console.log(inputCity.value);

    inputCityWeather(inputCity.value, layer);
    clearInput(inputCity);
    
    if(layer.classList.contains('active')){
        toggleDisplayOnOff('.weather-card');
    }
    if (!layer.classList.contains('active')){
        toggleDisplayOn('.loading-card');
    }
}

userSubmitCity()
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7O0FBSUEsdUVBQXVFLEtBQUs7QUFDNUUscUVBQXFFLEtBQUs7OztBQUcxRTtBQUNBO0FBQ0EseUZBQXlGLEtBQUs7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLEtBQUs7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixXQUFXLGFBQWEsUUFBUTtBQUN6RCxzQkFBc0IsZUFBZSxRQUFRO0FBQzdDLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1Mb25kb24mQVBQSUQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNcbi8vYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0tNi44NzIyJmxvbj0xMDcuNTQyNSZhcHBpZD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2BcblxuXG5cbi8vIHdlYXRoZXIgbm93IHVzZSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJkFQUElEPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYDtcbi8vIGZvcmVjYXN0IHVzZSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2BcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpe1xuICAgIHRyeXtcbiAgICAgICAgbGV0IHdlYXRoZXJBUEkgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJkFQUElEPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYCk7XG4gICAgICAgIGxldCByZXNwb25zZUFQSSA9IGF3YWl0IHdlYXRoZXJBUEkuanNvbigpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VBUElcbiAgICB9XG4gICAgY2F0Y2h7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlcnJvciBnZXQgd2VhdGhlcicpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXJyb3Igd2VhdGhlciBub3QgZm91bmQhJylcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGNpdHkpe1xuICAgIHRyeXtcbiAgICAgICAgbGV0IHdlYXRoZXJBUEkgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2ApO1xuICAgICAgICBsZXQgcmVzcG9uc2VBUEkgPSBhd2FpdCB3ZWF0aGVyQVBJLmpzb24oKTsgXG4gICAgICAgIHJldHVybiByZXNwb25zZUFQSVxuICAgIH1cbiAgICBjYXRjaHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciB3ZWF0aGVyIGZvcmVjYXN0IG5vdCBmb3VuZCEnKVxuICAgIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIHNob3dXZWF0aGVyKGNpdHkpe1xuICAgIGxldCB3ZWF0aGVyQ2l0eSA9IGF3YWl0IGdldFdlYXRoZXIoY2l0eSk7XG4gICAgbGV0IHdlYXRoZXJGb3JlY2FzdCA9IGF3YWl0IGdldEZvcmVjYXN0KGNpdHkpO1xuICAgIHRyeSB7IFxuICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJDaXR5KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyQ2l0eS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHsgXG4gICAgICAgICAgICAgICAgY2xvdWRzOnsgYWxsOmNsb3VkIH0sIG5hbWUsIHN5czp7Y291bnRyeX0sXG4gICAgICAgICAgICAgICAgbWFpbjp7dGVtcCwgaHVtaWRpdHl9LCB3aW5kOntzcGVlZH0gXG4gICAgICAgICAgICB9ID0gd2VhdGhlckNpdHk7XG4gICAgICAgICAgICBjb25zdCBkZXNjID0gd2VhdGhlckNpdHkud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgY291bnRyeSwgXG4gICAgICAgICAgICAgICAgY2xvdWQsIFxuICAgICAgICAgICAgICAgIHRlbXA6IE1hdGgucm91bmQodGVtcCksXG4gICAgICAgICAgICAgICAgaHVtaWRpdHksIFxuICAgICAgICAgICAgICAgIGRlc2MsXG4gICAgICAgICAgICAgICAgc3BlZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGNhdGNoe1xuICAgICAgICAvL2NvbnNvbGUubG9nKHdlYXRoZXJDaXR5Lm1lc3NhZ2UgKyAnZXJyb3IgY29kZTogJysgd2VhdGhlckNpdHkuY29kKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHdlYXRoZXJDaXR5Lm1lc3NhZ2UpOyBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURpc3BsYXlPbk9mZihzZWxlY3Rvcil7XG4gICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAobGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XG4gICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURpc3BsYXlPbihzZWxlY3Rvcil7XG4gICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZURpc3BsYXlPZmYoc2VsZWN0b3Ipe1xuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb0RPTSh2YWwpe1xuICAgIGNvbnN0IGRpc3BsYXlMYXllcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YT1cImRpc3BsYXlcIl0nKTtcbiAgICBjb25zb2xlLmxvZyhkaXNwbGF5TGF5ZXJzKTtcbiAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgIGRpc3BsYXlMYXllcnMuZm9yRWFjaCgobGF5ZXIpPT57XG4gICAgICAgIGNvbnN0IGFycmF5cyA9IFsnbmFtZScsICdjb3VudHJ5JywgJ3RlbXAnLCAnaHVtaWRpdHknLCAnZGVzYycsICdjbG91ZCcsICdzcGVlZCddO1xuICAgICAgICBhcnJheXMuZm9yRWFjaCgoYXJyYXkpPT4ge1xuICAgICAgICAgICAgaWYobGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKGFycmF5KSl7XG4gICAgICAgICAgICAgICAgbGF5ZXIudGV4dENvbnRlbnQ9Jyc7XG4gICAgICAgICAgICAgICAgbGF5ZXIudGV4dENvbnRlbnQgPSB2YWxbYXJyYXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyBsYXllci50ZXh0Q29udGVudD0gdmFsW107XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaW5wdXRDaXR5V2VhdGhlcihjaXR5LCBsYXllcikge1xuICAgIFxuICAgIHNob3dXZWF0aGVyKGNpdHkpXG4gICAgICAgIC50aGVuKCh2YWwpPT4ge1xuICAgICAgICAgICAgdG9nZ2xlRGlzcGxheU9mZignLmxvYWRpbmctY2FyZCcpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NpdHk6ICcgKyB2YWwubmFtZSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0ZW1wOiAnKyB2YWwudGVtcCArICfCsEMnKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2h1bWlkaXR5OiAnICsgdmFsLmh1bWlkaXR5ICsgJyUnKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Rlc2NyaXB0aW9uOiAnICsgdmFsLmRlc2MpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xvdWQgcGVyY2VudGFnZTogJysgdmFsLmNsb3VkICsgJyUnKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3dpbmQgc3BlZWQ6ICcrIHZhbC5zcGVlZCArICcga3BoJylcbiAgICAgICAgICAgIGRpc3BsYXlUb0RPTSh2YWwpO1xuICAgICAgICAgICAgdG9nZ2xlRGlzcGxheU9uT2ZmKCcud2VhdGhlci1jYXJkJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKG1lcyk9PiBjb25zb2xlLmxvZyhtZXMpKTtcbn1cblxuZnVuY3Rpb24gdXNlclN1Ym1pdENpdHkoKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PnsgXG4gICAgICAgIHN1Ym1pdEV2ZW50KCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJJbnB1dChpbnB1dCl7XG4gICByZXR1cm4gaW5wdXQudmFsdWUgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRFdmVudCgpe1xuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2FyZCcpO1xuICAgIGNvbnN0IGlucHV0Q2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dENpdHknKTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dENpdHkudmFsdWUpO1xuXG4gICAgaW5wdXRDaXR5V2VhdGhlcihpbnB1dENpdHkudmFsdWUsIGxheWVyKTtcbiAgICBjbGVhcklucHV0KGlucHV0Q2l0eSk7XG4gICAgXG4gICAgaWYobGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XG4gICAgICAgIHRvZ2dsZURpc3BsYXlPbk9mZignLndlYXRoZXItY2FyZCcpO1xuICAgIH1cbiAgICBpZiAoIWxheWVyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xuICAgICAgICB0b2dnbGVEaXNwbGF5T24oJy5sb2FkaW5nLWNhcmQnKTtcbiAgICB9XG59XG5cbnVzZXJTdWJtaXRDaXR5KCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=