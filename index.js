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
        const layer = document.querySelector('.loading-card');
        layer.textContent = `Error${weatherCity.cod}(${weatherCity.message}) please check your input again`;
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
            })
        .catch((mes)=> {
            console.log(mes);      
        });
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
function loadingNotice(text){
    const layer = document.querySelector('.loading-card');
    // const loading = document.querySelector('.loading-animation');
    // loading.className='loadingAnimate';
    // loading.src=`./img/loading.png`; 

    layer.textContent = text;
}

function submitEvent(){
    const layer = document.querySelector('.weather-card');
    const inputCity = document.querySelector('.inputCity');
    console.log(inputCity.value);

    loadingNotice('Please Wait Ya')

    inputCityWeather(inputCity.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7O0FBSUEsdUVBQXVFLEtBQUs7QUFDNUUscUVBQXFFLEtBQUs7OztBQUcxRTtBQUNBO0FBQ0EseUZBQXlGLEtBQUs7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLEtBQUs7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixXQUFXLGFBQWEsUUFBUTtBQUN6RCxzQkFBc0IsZUFBZSxRQUFRO0FBQzdDLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQixHQUFHLG9CQUFvQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPUxvbmRvbiZBUFBJRD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY1xuLy9gaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PS02Ljg3MjImbG9uPTEwNy41NDI1JmFwcGlkPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYFxuXG5cblxuLy8gd2VhdGhlciBub3cgdXNlIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmQVBQSUQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgO1xuLy8gZm9yZWNhc3QgdXNlIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYFxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgd2VhdGhlckFQSSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmQVBQSUQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlQVBJID0gYXdhaXQgd2VhdGhlckFQSS5qc29uKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZUFQSVxuICAgIH1cbiAgICBjYXRjaHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Vycm9yIGdldCB3ZWF0aGVyJylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciB3ZWF0aGVyIG5vdCBmb3VuZCEnKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QoY2l0eSl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgd2VhdGhlckFQSSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYCk7XG4gICAgICAgIGxldCByZXNwb25zZUFQSSA9IGF3YWl0IHdlYXRoZXJBUEkuanNvbigpOyBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlQVBJXG4gICAgfVxuICAgIGNhdGNoe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHdlYXRoZXIgZm9yZWNhc3Qgbm90IGZvdW5kIScpXG4gICAgfVxufVxuYXN5bmMgZnVuY3Rpb24gc2hvd1dlYXRoZXIoY2l0eSl7XG4gICAgbGV0IHdlYXRoZXJDaXR5ID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5KTtcbiAgICBsZXQgd2VhdGhlckZvcmVjYXN0ID0gYXdhaXQgZ2V0Rm9yZWNhc3QoY2l0eSk7XG4gICAgdHJ5IHsgXG4gICAgICAgY29uc29sZS5sb2cod2VhdGhlckNpdHkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJDaXR5LndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgY29uc3QgeyBcbiAgICAgICAgICAgICAgICBjbG91ZHM6eyBhbGw6Y2xvdWQgfSwgbmFtZSwgc3lzOntjb3VudHJ5fSxcbiAgICAgICAgICAgICAgICBtYWluOnt0ZW1wLCBodW1pZGl0eX0sIHdpbmQ6e3NwZWVkfSBcbiAgICAgICAgICAgIH0gPSB3ZWF0aGVyQ2l0eTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSB3ZWF0aGVyQ2l0eS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBjb3VudHJ5LCBcbiAgICAgICAgICAgICAgICBjbG91ZCwgXG4gICAgICAgICAgICAgICAgdGVtcDogTWF0aC5yb3VuZCh0ZW1wKSxcbiAgICAgICAgICAgICAgICBodW1pZGl0eSwgXG4gICAgICAgICAgICAgICAgZGVzYyxcbiAgICAgICAgICAgICAgICBzcGVlZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgY2F0Y2h7XG4gICAgICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmctY2FyZCcpO1xuICAgICAgICBsYXllci50ZXh0Q29udGVudCA9IGBFcnJvciR7d2VhdGhlckNpdHkuY29kfSgke3dlYXRoZXJDaXR5Lm1lc3NhZ2V9KSBwbGVhc2UgY2hlY2sgeW91ciBpbnB1dCBhZ2FpbmA7XG4gICAgICAgIC8vY29uc29sZS5sb2cod2VhdGhlckNpdHkubWVzc2FnZSArICdlcnJvciBjb2RlOiAnKyB3ZWF0aGVyQ2l0eS5jb2QpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3Iod2VhdGhlckNpdHkubWVzc2FnZSk7IFxuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGlzcGxheU9uT2ZmKHNlbGVjdG9yKXtcbiAgICBjb25zdCBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChsYXllci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcbiAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGlzcGxheU9uKHNlbGVjdG9yKXtcbiAgICBjb25zdCBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuZnVuY3Rpb24gdG9nZ2xlRGlzcGxheU9mZihzZWxlY3Rvcil7XG4gICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBsYXllci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvRE9NKHZhbCl7XG4gICAgY29uc3QgZGlzcGxheUxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhPVwiZGlzcGxheVwiXScpO1xuICAgIGRpc3BsYXlMYXllcnMuZm9yRWFjaCgobGF5ZXIpPT57XG4gICAgICAgIGNvbnN0IGFycmF5cyA9IFsnbmFtZScsICdjb3VudHJ5JywgJ3RlbXAnLCAnaHVtaWRpdHknLCAnZGVzYycsICdjbG91ZCcsICdzcGVlZCddO1xuICAgICAgICBhcnJheXMuZm9yRWFjaCgoYXJyYXkpPT4ge1xuICAgICAgICAgICAgaWYobGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKGFycmF5KSl7XG4gICAgICAgICAgICAgICAgbGF5ZXIudGV4dENvbnRlbnQ9Jyc7XG4gICAgICAgICAgICAgICAgbGF5ZXIudGV4dENvbnRlbnQgPSB2YWxbYXJyYXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGlucHV0Q2l0eVdlYXRoZXIoY2l0eSkge1xuICAgIHNob3dXZWF0aGVyKGNpdHkpXG4gICAgICAgIC50aGVuKCh2YWwpPT4ge1xuICAgICAgICAgICAgdG9nZ2xlRGlzcGxheU9mZignLmxvYWRpbmctY2FyZCcpO1xuICAgICAgICAgICAgZGlzcGxheVRvRE9NKHZhbCk7XG4gICAgICAgICAgICB0b2dnbGVEaXNwbGF5T25PZmYoJy53ZWF0aGVyLWNhcmQnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgobWVzKT0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lcyk7ICAgICAgXG4gICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VyU3VibWl0Q2l0eSgpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+eyBcbiAgICAgICAgc3VibWl0RXZlbnQoKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0KGlucHV0KXtcbiAgIHJldHVybiBpbnB1dC52YWx1ZSA9IG51bGw7XG59XG5mdW5jdGlvbiBsb2FkaW5nTm90aWNlKHRleHQpe1xuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmctY2FyZCcpO1xuICAgIC8vIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1hbmltYXRpb24nKTtcbiAgICAvLyBsb2FkaW5nLmNsYXNzTmFtZT0nbG9hZGluZ0FuaW1hdGUnO1xuICAgIC8vIGxvYWRpbmcuc3JjPWAuL2ltZy9sb2FkaW5nLnBuZ2A7IFxuXG4gICAgbGF5ZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xufVxuXG5mdW5jdGlvbiBzdWJtaXRFdmVudCgpe1xuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2FyZCcpO1xuICAgIGNvbnN0IGlucHV0Q2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dENpdHknKTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dENpdHkudmFsdWUpO1xuXG4gICAgbG9hZGluZ05vdGljZSgnUGxlYXNlIFdhaXQgWWEnKVxuXG4gICAgaW5wdXRDaXR5V2VhdGhlcihpbnB1dENpdHkudmFsdWUpO1xuICAgIGNsZWFySW5wdXQoaW5wdXRDaXR5KTtcbiAgICBcbiAgICBpZihsYXllci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcbiAgICAgICAgdG9nZ2xlRGlzcGxheU9uT2ZmKCcud2VhdGhlci1jYXJkJyk7XG4gICAgfVxuICAgIGlmICghbGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XG4gICAgICAgIHRvZ2dsZURpc3BsYXlPbignLmxvYWRpbmctY2FyZCcpO1xuICAgIH1cbn1cblxudXNlclN1Ym1pdENpdHkoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==