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
                clouds:{ all:cloud }, name, 
                main:{temp, humidity}, wind:{speed} 
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
    const displayLayers = document.querySelectorAll('[data="display"]');
    console.log(displayLayers);
    console.log(val);
    displayLayers.forEach((layer)=>{
        const arrays = ['name', 'temp', 'humidity', 'desc', 'cloud', 'speed'];
        arrays.forEach((array)=> {
            if(layer.classList.contains(array)){
                layer.textContent='';
                layer.textContent = val[array];
                // console.log(val['name']);
                // console.log(val.constructor.name);
            }
        })
        // layer.textContent= val[];
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7O0FBSUEsdUVBQXVFLEtBQUs7QUFDNUUscUVBQXFFLEtBQUs7OztBQUcxRTtBQUNBO0FBQ0EseUZBQXlGLEtBQUs7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLEtBQUs7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDLHNCQUFzQixlQUFlLFFBQVE7QUFDN0MsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1Mb25kb24mQVBQSUQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNcbi8vYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0tNi44NzIyJmxvbj0xMDcuNTQyNSZhcHBpZD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2BcblxuXG5cbi8vIHdlYXRoZXIgbm93IHVzZSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJkFQUElEPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYDtcbi8vIGZvcmVjYXN0IHVzZSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2BcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpe1xuICAgIHRyeXtcbiAgICAgICAgbGV0IHdlYXRoZXJBUEkgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJkFQUElEPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYCk7XG4gICAgICAgIGxldCByZXNwb25zZUFQSSA9IGF3YWl0IHdlYXRoZXJBUEkuanNvbigpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VBUElcbiAgICB9XG4gICAgY2F0Y2h7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlcnJvciBnZXQgd2VhdGhlcicpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXJyb3Igd2VhdGhlciBub3QgZm91bmQhJylcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGNpdHkpe1xuICAgIHRyeXtcbiAgICAgICAgbGV0IHdlYXRoZXJBUEkgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2ApO1xuICAgICAgICBsZXQgcmVzcG9uc2VBUEkgPSBhd2FpdCB3ZWF0aGVyQVBJLmpzb24oKTsgXG4gICAgICAgIHJldHVybiByZXNwb25zZUFQSVxuICAgIH1cbiAgICBjYXRjaHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvciB3ZWF0aGVyIGZvcmVjYXN0IG5vdCBmb3VuZCEnKVxuICAgIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIHNob3dXZWF0aGVyKGNpdHkpe1xuICAgIGxldCB3ZWF0aGVyQ2l0eSA9IGF3YWl0IGdldFdlYXRoZXIoY2l0eSk7XG4gICAgbGV0IHdlYXRoZXJGb3JlY2FzdCA9IGF3YWl0IGdldEZvcmVjYXN0KGNpdHkpO1xuICAgIHRyeSB7IFxuICAgICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJDaXR5KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyQ2l0eS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHsgXG4gICAgICAgICAgICAgICAgY2xvdWRzOnsgYWxsOmNsb3VkIH0sIG5hbWUsIFxuICAgICAgICAgICAgICAgIG1haW46e3RlbXAsIGh1bWlkaXR5fSwgd2luZDp7c3BlZWR9IFxuICAgICAgICAgICAgfSA9IHdlYXRoZXJDaXR5O1xuICAgICAgICAgICAgY29uc3QgZGVzYyA9IHdlYXRoZXJDaXR5LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICBuYW1lLCBcbiAgICAgICAgICAgICAgICBjbG91ZCwgXG4gICAgICAgICAgICAgICAgdGVtcCxcbiAgICAgICAgICAgICAgICBodW1pZGl0eSwgXG4gICAgICAgICAgICAgICAgZGVzYyxcbiAgICAgICAgICAgICAgICBzcGVlZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgY2F0Y2h7XG4gICAgICAgIC8vY29uc29sZS5sb2cod2VhdGhlckNpdHkubWVzc2FnZSArICdlcnJvciBjb2RlOiAnKyB3ZWF0aGVyQ2l0eS5jb2QpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3Iod2VhdGhlckNpdHkubWVzc2FnZSk7IFxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKHdlYXRoZXJGb3JlY2FzdClcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvRE9NKHZhbCl7XG4gICAgY29uc3QgZGlzcGxheUxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhPVwiZGlzcGxheVwiXScpO1xuICAgIGNvbnNvbGUubG9nKGRpc3BsYXlMYXllcnMpO1xuICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgZGlzcGxheUxheWVycy5mb3JFYWNoKChsYXllcik9PntcbiAgICAgICAgY29uc3QgYXJyYXlzID0gWyduYW1lJywgJ3RlbXAnLCAnaHVtaWRpdHknLCAnZGVzYycsICdjbG91ZCcsICdzcGVlZCddO1xuICAgICAgICBhcnJheXMuZm9yRWFjaCgoYXJyYXkpPT4ge1xuICAgICAgICAgICAgaWYobGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKGFycmF5KSl7XG4gICAgICAgICAgICAgICAgbGF5ZXIudGV4dENvbnRlbnQ9Jyc7XG4gICAgICAgICAgICAgICAgbGF5ZXIudGV4dENvbnRlbnQgPSB2YWxbYXJyYXldO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbFsnbmFtZSddKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWwuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vIGxheWVyLnRleHRDb250ZW50PSB2YWxbXTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBpbnB1dENpdHlXZWF0aGVyKGNpdHkpIHtcbiAgIHNob3dXZWF0aGVyKGNpdHkpXG4gICAgICAgIC50aGVuKCh2YWwpPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NpdHk6ICcgKyB2YWwubmFtZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZW1wOiAnKyB2YWwudGVtcCArICfCsEMnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2h1bWlkaXR5OiAnICsgdmFsLmh1bWlkaXR5ICsgJyUnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rlc2NyaXB0aW9uOiAnICsgdmFsLmRlc2MpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvdWQgcGVyY2VudGFnZTogJysgdmFsLmNsb3VkICsgJyUnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dpbmQgc3BlZWQ6ICcrIHZhbC5zcGVlZCArICcga3BoJylcbiAgICAgICAgICAgIGRpc3BsYXlUb0RPTSh2YWwpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChtZXMpPT4gY29uc29sZS5sb2cobWVzKSk7XG59XG5mdW5jdGlvbiB1c2VyU3VibWl0Q2l0eSgpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+eyBcbiAgICAgICAgc3VibWl0RXZlbnQoKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0KGlucHV0KXtcbiAgIHJldHVybiBpbnB1dC52YWx1ZSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEV2ZW50KCl7XG4gICAgY29uc3QgaW5wdXRDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Q2l0eScpO1xuICAgIGNvbnNvbGUubG9nKGlucHV0Q2l0eS52YWx1ZSk7XG4gICAgaW5wdXRDaXR5V2VhdGhlcihpbnB1dENpdHkudmFsdWUpO1xuICAgIGNsZWFySW5wdXQoaW5wdXRDaXR5KTtcbn1cblxudXNlclN1Ym1pdENpdHkoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==