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
       // console.log(weatherCity)
        // console.log(weatherCity.weather[0].description);
            const { 
                clouds:{ all:cloud }, name, main:{temp, humidity}, wind:{speed} 
            } = weatherCity;
            const desc = weatherCity.weather[0].description;
            
            return{
                name, 
                cloud, 
                temp,
                humidity, 
                desc,
                speed
            }
        }
    catch{
        //console.log(weatherCity.message + 'error code: '+ weatherCity.cod);
        throw new Error(weatherCity.message); 
    }
    //console.log(weatherForecast)
}

function displayToDOM(val){
    console.log(val);
}

function inputCityWeather(city) {
   showWeather(city)
        .then((val)=> {
            console.log('city: ' + val.name)
            console.log('temp: '+ val.temp + '°C')
            console.log('humidity: ' + val.humidity + '%')
            console.log('description: ' + val.desc)
            console.log('cloud percentage: '+ val.cloud + '%')
            console.log('wind speed: '+ val.speed + ' kph')
            displayToDOM(val);
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
    const inputCity = document.querySelector('.inputCity');
    console.log(inputCity.value);
    inputCityWeather(inputCity.value);
    clearInput(inputCity);
}

userSubmitCity()
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7O0FBSUEsdUVBQXVFLEtBQUs7QUFDNUUscUVBQXFFLEtBQUs7OztBQUcxRTtBQUNBO0FBQ0EseUZBQXlGLEtBQUs7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLEtBQUs7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixXQUFXLGNBQWMsZUFBZSxRQUFRO0FBQ3pFLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPUxvbmRvbiZBUFBJRD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY1xuLy9gaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PS02Ljg3MjImbG9uPTEwNy41NDI1JmFwcGlkPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYFxuXG5cblxuLy8gd2VhdGhlciBub3cgdXNlIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmQVBQSUQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgO1xuLy8gZm9yZWNhc3QgdXNlIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYFxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgd2VhdGhlckFQSSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmQVBQSUQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlQVBJID0gYXdhaXQgd2VhdGhlckFQSS5qc29uKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZUFQSVxuICAgIH1cbiAgICBjYXRjaHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Vycm9yIGdldCB3ZWF0aGVyJylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciB3ZWF0aGVyIG5vdCBmb3VuZCEnKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QoY2l0eSl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgd2VhdGhlckFQSSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYCk7XG4gICAgICAgIGxldCByZXNwb25zZUFQSSA9IGF3YWl0IHdlYXRoZXJBUEkuanNvbigpOyBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlQVBJXG4gICAgfVxuICAgIGNhdGNoe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHdlYXRoZXIgZm9yZWNhc3Qgbm90IGZvdW5kIScpXG4gICAgfVxufVxuYXN5bmMgZnVuY3Rpb24gc2hvd1dlYXRoZXIoY2l0eSl7XG4gICAgbGV0IHdlYXRoZXJDaXR5ID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5KTtcbiAgICBsZXQgd2VhdGhlckZvcmVjYXN0ID0gYXdhaXQgZ2V0Rm9yZWNhc3QoY2l0eSk7XG4gICAgdHJ5IHsgXG4gICAgICAgLy8gY29uc29sZS5sb2cod2VhdGhlckNpdHkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJDaXR5LndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgY29uc3QgeyBcbiAgICAgICAgICAgICAgICBjbG91ZHM6eyBhbGw6Y2xvdWQgfSwgbmFtZSwgbWFpbjp7dGVtcCwgaHVtaWRpdHl9LCB3aW5kOntzcGVlZH0gXG4gICAgICAgICAgICB9ID0gd2VhdGhlckNpdHk7XG4gICAgICAgICAgICBjb25zdCBkZXNjID0gd2VhdGhlckNpdHkud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIG5hbWUsIFxuICAgICAgICAgICAgICAgIGNsb3VkLCBcbiAgICAgICAgICAgICAgICB0ZW1wLFxuICAgICAgICAgICAgICAgIGh1bWlkaXR5LCBcbiAgICAgICAgICAgICAgICBkZXNjLFxuICAgICAgICAgICAgICAgIHNwZWVkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBjYXRjaHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh3ZWF0aGVyQ2l0eS5tZXNzYWdlICsgJ2Vycm9yIGNvZGU6ICcrIHdlYXRoZXJDaXR5LmNvZCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcih3ZWF0aGVyQ2l0eS5tZXNzYWdlKTsgXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2cod2VhdGhlckZvcmVjYXN0KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9ET00odmFsKXtcbiAgICBjb25zb2xlLmxvZyh2YWwpO1xufVxuXG5mdW5jdGlvbiBpbnB1dENpdHlXZWF0aGVyKGNpdHkpIHtcbiAgIHNob3dXZWF0aGVyKGNpdHkpXG4gICAgICAgIC50aGVuKCh2YWwpPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpdHk6ICcgKyB2YWwubmFtZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZW1wOiAnKyB2YWwudGVtcCArICfCsEMnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2h1bWlkaXR5OiAnICsgdmFsLmh1bWlkaXR5ICsgJyUnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rlc2NyaXB0aW9uOiAnICsgdmFsLmRlc2MpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvdWQgcGVyY2VudGFnZTogJysgdmFsLmNsb3VkICsgJyUnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dpbmQgc3BlZWQ6ICcrIHZhbC5zcGVlZCArICcga3BoJylcbiAgICAgICAgICAgIGRpc3BsYXlUb0RPTSh2YWwpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChtZXMpPT4gY29uc29sZS5sb2cobWVzKSk7XG59XG5mdW5jdGlvbiB1c2VyU3VibWl0Q2l0eSgpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+eyBcbiAgICAgICAgc3VibWl0RXZlbnQoKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0KGlucHV0KXtcbiAgIHJldHVybiBpbnB1dC52YWx1ZSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEV2ZW50KCl7XG4gICAgY29uc3QgaW5wdXRDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Q2l0eScpO1xuICAgIGNvbnNvbGUubG9nKGlucHV0Q2l0eS52YWx1ZSk7XG4gICAgaW5wdXRDaXR5V2VhdGhlcihpbnB1dENpdHkudmFsdWUpO1xuICAgIGNsZWFySW5wdXQoaW5wdXRDaXR5KTtcbn1cblxudXNlclN1Ym1pdENpdHkoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==