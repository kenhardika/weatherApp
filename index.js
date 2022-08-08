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
        console.log(responseAPI);
    }
    catch{
        console.log('error loading the weather')
    }
}

async function getForecast(city){
    try{
        let weatherAPI = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=a13d8edf32d7b9d01229e1749c07fcdc`);
        let responseAPI = await weatherAPI.json();
        console.log(responseAPI);
    }
    catch{
        console.log('error loading the weather')
    }
}

getWeather('Cimahi');
getForecast('Cimahi');
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7O0FBSUEsdUVBQXVFLEtBQUs7QUFDNUUscUVBQXFFLEtBQUs7OztBQUcxRTtBQUNBO0FBQ0EseUZBQXlGLEtBQUs7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBGQUEwRixLQUFLO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1Mb25kb24mQVBQSUQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNcbi8vYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0tNi44NzIyJmxvbj0xMDcuNTQyNSZhcHBpZD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2BcblxuXG5cbi8vIHdlYXRoZXIgbm93IHVzZSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJkFQUElEPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYDtcbi8vIGZvcmVjYXN0IHVzZSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD1hMTNkOGVkZjMyZDdiOWQwMTIyOWUxNzQ5YzA3ZmNkY2BcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpe1xuICAgIHRyeXtcbiAgICAgICAgbGV0IHdlYXRoZXJBUEkgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJkFQUElEPWExM2Q4ZWRmMzJkN2I5ZDAxMjI5ZTE3NDljMDdmY2RjYCk7XG4gICAgICAgIGxldCByZXNwb25zZUFQSSA9IGF3YWl0IHdlYXRoZXJBUEkuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUFQSSk7XG4gICAgfVxuICAgIGNhdGNoe1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbG9hZGluZyB0aGUgd2VhdGhlcicpXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChjaXR5KXtcbiAgICB0cnl7XG4gICAgICAgIGxldCB3ZWF0aGVyQVBJID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9YTEzZDhlZGYzMmQ3YjlkMDEyMjllMTc0OWMwN2ZjZGNgKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlQVBJID0gYXdhaXQgd2VhdGhlckFQSS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlQVBJKTtcbiAgICB9XG4gICAgY2F0Y2h7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBsb2FkaW5nIHRoZSB3ZWF0aGVyJylcbiAgICB9XG59XG5cbmdldFdlYXRoZXIoJ0NpbWFoaScpO1xuZ2V0Rm9yZWNhc3QoJ0NpbWFoaScpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==