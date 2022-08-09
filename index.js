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
                clouds:{ all:cloud }, name, main:{temp}, wind:{speed} 
            } = weatherCity;
            const desc = weatherCity.weather[0].description;
            
            return{
                name, 
                cloud, 
                temp, 
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

function inputCityWeather(city) {
   showWeather(city)
        .then((val)=> {
            console.log('city: ' + val.name)
            console.log('temp: '+ val.temp + '°C')
            console.log('description: ' + val.desc)
            console.log('cloud percentage: '+ val.cloud + '%')
            console.log('wind speed: '+ val.speed + ' kph')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7O0FBSUEsdUVBQXVFLEtBQUs7QUFDNUUscUVBQXFFLEtBQUs7OztBQUcxRTtBQUNBO0FBQ0EseUZBQXlGLEtBQUs7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLEtBQUs7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixXQUFXLGNBQWMsS0FBSyxRQUFRO0FBQy9ELGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPUxvbmRvbiZBUFBJRD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY1xuLy9gaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PS02Ljg3MjImbG9uPTEwNy41NDI1JmFwcGlkPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYFxuXG5cblxuLy8gd2VhdGhlciBub3cgdXNlIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmQVBQSUQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgO1xuLy8gZm9yZWNhc3QgdXNlIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYFxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgd2VhdGhlckFQSSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmQVBQSUQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlQVBJID0gYXdhaXQgd2VhdGhlckFQSS5qc29uKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZUFQSVxuICAgIH1cbiAgICBjYXRjaHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Vycm9yIGdldCB3ZWF0aGVyJylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciB3ZWF0aGVyIG5vdCBmb3VuZCEnKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QoY2l0eSl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgd2VhdGhlckFQSSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYCk7XG4gICAgICAgIGxldCByZXNwb25zZUFQSSA9IGF3YWl0IHdlYXRoZXJBUEkuanNvbigpOyBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlQVBJXG4gICAgfVxuICAgIGNhdGNoe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHdlYXRoZXIgZm9yZWNhc3Qgbm90IGZvdW5kIScpXG4gICAgfVxufVxuYXN5bmMgZnVuY3Rpb24gc2hvd1dlYXRoZXIoY2l0eSl7XG4gICAgbGV0IHdlYXRoZXJDaXR5ID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5KTtcbiAgICBsZXQgd2VhdGhlckZvcmVjYXN0ID0gYXdhaXQgZ2V0Rm9yZWNhc3QoY2l0eSk7XG4gICAgdHJ5IHsgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJDaXR5KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyQ2l0eS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHsgXG4gICAgICAgICAgICAgICAgY2xvdWRzOnsgYWxsOmNsb3VkIH0sIG5hbWUsIG1haW46e3RlbXB9LCB3aW5kOntzcGVlZH0gXG4gICAgICAgICAgICB9ID0gd2VhdGhlckNpdHk7XG4gICAgICAgICAgICBjb25zdCBkZXNjID0gd2VhdGhlckNpdHkud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIG5hbWUsIFxuICAgICAgICAgICAgICAgIGNsb3VkLCBcbiAgICAgICAgICAgICAgICB0ZW1wLCBcbiAgICAgICAgICAgICAgICBkZXNjLFxuICAgICAgICAgICAgICAgIHNwZWVkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBjYXRjaHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh3ZWF0aGVyQ2l0eS5tZXNzYWdlICsgJ2Vycm9yIGNvZGU6ICcrIHdlYXRoZXJDaXR5LmNvZCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcih3ZWF0aGVyQ2l0eS5tZXNzYWdlKTsgXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2cod2VhdGhlckZvcmVjYXN0KVxufVxuXG5mdW5jdGlvbiBpbnB1dENpdHlXZWF0aGVyKGNpdHkpIHtcbiAgIHNob3dXZWF0aGVyKGNpdHkpXG4gICAgICAgIC50aGVuKCh2YWwpPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpdHk6ICcgKyB2YWwubmFtZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZW1wOiAnKyB2YWwudGVtcCArICfCsEMnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rlc2NyaXB0aW9uOiAnICsgdmFsLmRlc2MpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvdWQgcGVyY2VudGFnZTogJysgdmFsLmNsb3VkICsgJyUnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dpbmQgc3BlZWQ6ICcrIHZhbC5zcGVlZCArICcga3BoJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgobWVzKT0+IGNvbnNvbGUubG9nKG1lcykpO1xufVxuZnVuY3Rpb24gdXNlclN1Ym1pdENpdHkoKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PnsgXG4gICAgICAgIHN1Ym1pdEV2ZW50KCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJJbnB1dChpbnB1dCl7XG4gICByZXR1cm4gaW5wdXQudmFsdWUgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRFdmVudCgpe1xuICAgIGNvbnN0IGlucHV0Q2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dENpdHknKTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dENpdHkudmFsdWUpO1xuICAgIGlucHV0Q2l0eVdlYXRoZXIoaW5wdXRDaXR5LnZhbHVlKTtcblxuICAgIGNsZWFySW5wdXQoaW5wdXRDaXR5KTtcbn1cblxudXNlclN1Ym1pdENpdHkoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==