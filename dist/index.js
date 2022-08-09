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
    const submit = document.getElementById('submitCity');
    submit.addEventListener('click', (e)=>{ 
        e.preventDefault();
        submitEvent(); 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7O0FBSUEsdUVBQXVFLEtBQUs7QUFDNUUscUVBQXFFLEtBQUs7OztBQUcxRTtBQUNBO0FBQ0EseUZBQXlGLEtBQUs7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLEtBQUs7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixXQUFXLGNBQWMsS0FBSyxRQUFRO0FBQy9ELGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9odHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9TG9uZG9uJkFQUElEPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjXG4vL2BodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9LTYuODcyMiZsb249MTA3LjU0MjUmYXBwaWQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgXG5cblxuXG4vLyB3ZWF0aGVyIG5vdyB1c2UgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZBUFBJRD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2A7XG4vLyBmb3JlY2FzdCB1c2UgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgXG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KXtcbiAgICB0cnl7XG4gICAgICAgIGxldCB3ZWF0aGVyQVBJID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZBUFBJRD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2ApO1xuICAgICAgICBsZXQgcmVzcG9uc2VBUEkgPSBhd2FpdCB3ZWF0aGVyQVBJLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlQVBJXG4gICAgfVxuICAgIGNhdGNoe1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZXJyb3IgZ2V0IHdlYXRoZXInKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHdlYXRoZXIgbm90IGZvdW5kIScpXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChjaXR5KXtcbiAgICB0cnl7XG4gICAgICAgIGxldCB3ZWF0aGVyQVBJID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlQVBJID0gYXdhaXQgd2VhdGhlckFQSS5qc29uKCk7IFxuICAgICAgICByZXR1cm4gcmVzcG9uc2VBUElcbiAgICB9XG4gICAgY2F0Y2h7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXJyb3Igd2VhdGhlciBmb3JlY2FzdCBub3QgZm91bmQhJylcbiAgICB9XG59XG5hc3luYyBmdW5jdGlvbiBzaG93V2VhdGhlcihjaXR5KXtcbiAgICBsZXQgd2VhdGhlckNpdHkgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHkpO1xuICAgIGxldCB3ZWF0aGVyRm9yZWNhc3QgPSBhd2FpdCBnZXRGb3JlY2FzdChjaXR5KTtcbiAgICB0cnkgeyBcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2VhdGhlckNpdHkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJDaXR5LndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgY29uc3QgeyBcbiAgICAgICAgICAgICAgICBjbG91ZHM6eyBhbGw6Y2xvdWQgfSwgbmFtZSwgbWFpbjp7dGVtcH0sIHdpbmQ6e3NwZWVkfSBcbiAgICAgICAgICAgIH0gPSB3ZWF0aGVyQ2l0eTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSB3ZWF0aGVyQ2l0eS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgbmFtZSwgXG4gICAgICAgICAgICAgICAgY2xvdWQsIFxuICAgICAgICAgICAgICAgIHRlbXAsIFxuICAgICAgICAgICAgICAgIGRlc2MsXG4gICAgICAgICAgICAgICAgc3BlZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGNhdGNoe1xuICAgICAgICAvL2NvbnNvbGUubG9nKHdlYXRoZXJDaXR5Lm1lc3NhZ2UgKyAnZXJyb3IgY29kZTogJysgd2VhdGhlckNpdHkuY29kKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHdlYXRoZXJDaXR5Lm1lc3NhZ2UpOyBcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyh3ZWF0aGVyRm9yZWNhc3QpXG59XG5cbmZ1bmN0aW9uIGlucHV0Q2l0eVdlYXRoZXIoY2l0eSkge1xuICAgc2hvd1dlYXRoZXIoY2l0eSlcbiAgICAgICAgLnRoZW4oKHZhbCk9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2l0eTogJyArIHZhbC5uYW1lKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RlbXA6ICcrIHZhbC50ZW1wICsgJ8KwQycpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVzY3JpcHRpb246ICcgKyB2YWwuZGVzYylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG91ZCBwZXJjZW50YWdlOiAnKyB2YWwuY2xvdWQgKyAnJScpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2luZCBzcGVlZDogJysgdmFsLnNwZWVkICsgJyBrcGgnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChtZXMpPT4gY29uc29sZS5sb2cobWVzKSk7XG59XG5mdW5jdGlvbiB1c2VyU3VibWl0Q2l0eSgpe1xuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRDaXR5Jyk7XG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57IFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Ym1pdEV2ZW50KCk7IFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0KGlucHV0KXtcbiAgIHJldHVybiBpbnB1dC52YWx1ZSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEV2ZW50KCl7XG4gICAgY29uc3QgaW5wdXRDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Q2l0eScpO1xuICAgIGNvbnNvbGUubG9nKGlucHV0Q2l0eS52YWx1ZSk7XG4gICAgaW5wdXRDaXR5V2VhdGhlcihpbnB1dENpdHkudmFsdWUpO1xuXG4gICAgY2xlYXJJbnB1dChpbnB1dENpdHkpO1xufVxuXG51c2VyU3VibWl0Q2l0eSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9