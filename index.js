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
        console.log('error get weather')
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

showWeather('lokataralo')
.then((val)=> {
    console.log('city: ' + val.name)
    console.log('temp: '+ val.temp + '°C')
    console.log('description: ' + val.desc)
    console.log('cloud percentage: '+ val.cloud + '%')
    console.log('wind speed: '+ val.speed + ' kph')
    })
.catch((mes)=> console.log(mes));
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLEtBQUs7QUFDNUUscUVBQXFFLEtBQUs7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsS0FBSztBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLEtBQUs7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixXQUFXLGNBQWMsS0FBSyxRQUFRO0FBQy9ELGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1Mb25kb24mQVBQSUQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNcclxuLy9gaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PS02Ljg3MjImbG9uPTEwNy41NDI1JmFwcGlkPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYFxyXG5cclxuXHJcblxyXG4vLyB3ZWF0aGVyIG5vdyB1c2UgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZBUFBJRD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2A7XHJcbi8vIGZvcmVjYXN0IHVzZSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2BcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGxldCB3ZWF0aGVyQVBJID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZBUFBJRD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2ApO1xyXG4gICAgICAgIGxldCByZXNwb25zZUFQSSA9IGF3YWl0IHdlYXRoZXJBUEkuanNvbigpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZUFQSVxyXG4gICAgfVxyXG4gICAgY2F0Y2h7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGdldCB3ZWF0aGVyJylcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHdlYXRoZXIgbm90IGZvdW5kIScpXHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGNpdHkpe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGxldCB3ZWF0aGVyQVBJID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2VBUEkgPSBhd2FpdCB3ZWF0aGVyQVBJLmpzb24oKTsgXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlQVBJXHJcbiAgICB9XHJcbiAgICBjYXRjaHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIHdlYXRoZXIgZm9yZWNhc3Qgbm90IGZvdW5kIScpXHJcbiAgICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gc2hvd1dlYXRoZXIoY2l0eSl7XHJcbiAgICBsZXQgd2VhdGhlckNpdHkgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHkpO1xyXG4gICAgbGV0IHdlYXRoZXJGb3JlY2FzdCA9IGF3YWl0IGdldEZvcmVjYXN0KGNpdHkpO1xyXG4gICAgdHJ5IHsgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2VhdGhlckNpdHkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2VhdGhlckNpdHkud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgXHJcbiAgICAgICAgICAgICAgICBjbG91ZHM6eyBhbGw6Y2xvdWQgfSwgbmFtZSwgbWFpbjp7dGVtcH0sIHdpbmQ6e3NwZWVkfSBcclxuICAgICAgICAgICAgfSA9IHdlYXRoZXJDaXR5O1xyXG4gICAgICAgICAgICBjb25zdCBkZXNjID0gd2VhdGhlckNpdHkud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIG5hbWUsIFxyXG4gICAgICAgICAgICAgICAgY2xvdWQsIFxyXG4gICAgICAgICAgICAgICAgdGVtcCwgXHJcbiAgICAgICAgICAgICAgICBkZXNjLFxyXG4gICAgICAgICAgICAgICAgc3BlZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIGNhdGNoe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cod2VhdGhlckNpdHkubWVzc2FnZSArICdlcnJvciBjb2RlOiAnKyB3ZWF0aGVyQ2l0eS5jb2QpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcih3ZWF0aGVyQ2l0eS5tZXNzYWdlKTsgXHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKHdlYXRoZXJGb3JlY2FzdClcclxufVxyXG5cclxuc2hvd1dlYXRoZXIoJ2xva2F0YXJhbG8nKVxyXG4udGhlbigodmFsKT0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdjaXR5OiAnICsgdmFsLm5hbWUpXHJcbiAgICBjb25zb2xlLmxvZygndGVtcDogJysgdmFsLnRlbXAgKyAnwrBDJylcclxuICAgIGNvbnNvbGUubG9nKCdkZXNjcmlwdGlvbjogJyArIHZhbC5kZXNjKVxyXG4gICAgY29uc29sZS5sb2coJ2Nsb3VkIHBlcmNlbnRhZ2U6ICcrIHZhbC5jbG91ZCArICclJylcclxuICAgIGNvbnNvbGUubG9nKCd3aW5kIHNwZWVkOiAnKyB2YWwuc3BlZWQgKyAnIGtwaCcpXHJcbiAgICB9KVxyXG4uY2F0Y2goKG1lcyk9PiBjb25zb2xlLmxvZyhtZXMpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=