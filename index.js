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

function inputCityWeather(city) {
   showWeather(city)
        .then((val)=> {
            console.log('city: ' + val.name)
            console.log('temp: '+ val.temp + '°C')
            console.log('humidity: ' + val.humidity + '%')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLEtBQUs7QUFDNUUscUVBQXFFLEtBQUs7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsS0FBSztBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLEtBQUs7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixXQUFXLGNBQWMsZUFBZSxRQUFRO0FBQ3pFLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1Mb25kb24mQVBQSUQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNcclxuLy9gaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PS02Ljg3MjImbG9uPTEwNy41NDI1JmFwcGlkPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYFxyXG5cclxuXHJcblxyXG4vLyB3ZWF0aGVyIG5vdyB1c2UgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZBUFBJRD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2A7XHJcbi8vIGZvcmVjYXN0IHVzZSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2BcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGxldCB3ZWF0aGVyQVBJID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZBUFBJRD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2ApO1xyXG4gICAgICAgIGxldCByZXNwb25zZUFQSSA9IGF3YWl0IHdlYXRoZXJBUEkuanNvbigpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZUFQSVxyXG4gICAgfVxyXG4gICAgY2F0Y2h7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Vycm9yIGdldCB3ZWF0aGVyJylcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHdlYXRoZXIgbm90IGZvdW5kIScpXHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGNpdHkpe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGxldCB3ZWF0aGVyQVBJID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2VBUEkgPSBhd2FpdCB3ZWF0aGVyQVBJLmpzb24oKTsgXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlQVBJXHJcbiAgICB9XHJcbiAgICBjYXRjaHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHdlYXRoZXIgZm9yZWNhc3Qgbm90IGZvdW5kIScpXHJcbiAgICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gc2hvd1dlYXRoZXIoY2l0eSl7XHJcbiAgICBsZXQgd2VhdGhlckNpdHkgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHkpO1xyXG4gICAgbGV0IHdlYXRoZXJGb3JlY2FzdCA9IGF3YWl0IGdldEZvcmVjYXN0KGNpdHkpO1xyXG4gICAgdHJ5IHsgXHJcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckNpdHkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2VhdGhlckNpdHkud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgXHJcbiAgICAgICAgICAgICAgICBjbG91ZHM6eyBhbGw6Y2xvdWQgfSwgbmFtZSwgbWFpbjp7dGVtcCwgaHVtaWRpdHl9LCB3aW5kOntzcGVlZH0gXHJcbiAgICAgICAgICAgIH0gPSB3ZWF0aGVyQ2l0eTtcclxuICAgICAgICAgICAgY29uc3QgZGVzYyA9IHdlYXRoZXJDaXR5LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBuYW1lLCBcclxuICAgICAgICAgICAgICAgIGNsb3VkLCBcclxuICAgICAgICAgICAgICAgIHRlbXAsXHJcbiAgICAgICAgICAgICAgICBodW1pZGl0eSwgXHJcbiAgICAgICAgICAgICAgICBkZXNjLFxyXG4gICAgICAgICAgICAgICAgc3BlZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIGNhdGNoe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cod2VhdGhlckNpdHkubWVzc2FnZSArICdlcnJvciBjb2RlOiAnKyB3ZWF0aGVyQ2l0eS5jb2QpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcih3ZWF0aGVyQ2l0eS5tZXNzYWdlKTsgXHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKHdlYXRoZXJGb3JlY2FzdClcclxufVxyXG5cclxuZnVuY3Rpb24gaW5wdXRDaXR5V2VhdGhlcihjaXR5KSB7XHJcbiAgIHNob3dXZWF0aGVyKGNpdHkpXHJcbiAgICAgICAgLnRoZW4oKHZhbCk9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaXR5OiAnICsgdmFsLm5hbWUpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZW1wOiAnKyB2YWwudGVtcCArICfCsEMnKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaHVtaWRpdHk6ICcgKyB2YWwuaHVtaWRpdHkgKyAnJScpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZXNjcmlwdGlvbjogJyArIHZhbC5kZXNjKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvdWQgcGVyY2VudGFnZTogJysgdmFsLmNsb3VkICsgJyUnKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2luZCBzcGVlZDogJysgdmFsLnNwZWVkICsgJyBrcGgnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgobWVzKT0+IGNvbnNvbGUubG9nKG1lcykpO1xyXG59XHJcbmZ1bmN0aW9uIHVzZXJTdWJtaXRDaXR5KCl7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PnsgXHJcbiAgICAgICAgc3VibWl0RXZlbnQoKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJJbnB1dChpbnB1dCl7XHJcbiAgIHJldHVybiBpbnB1dC52YWx1ZSA9IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdEV2ZW50KCl7XHJcbiAgICBjb25zdCBpbnB1dENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRDaXR5Jyk7XHJcbiAgICBjb25zb2xlLmxvZyhpbnB1dENpdHkudmFsdWUpO1xyXG4gICAgaW5wdXRDaXR5V2VhdGhlcihpbnB1dENpdHkudmFsdWUpO1xyXG4gICAgY2xlYXJJbnB1dChpbnB1dENpdHkpO1xyXG59XHJcblxyXG51c2VyU3VibWl0Q2l0eSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9