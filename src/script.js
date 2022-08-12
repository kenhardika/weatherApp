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
    const displayIcon = document.querySelector('.display.icon img');
    displayLayers.forEach((layer)=>{
        const arrays = ['name', 'country', 'temp', 'humidity', 'desc', 'cloud', 'speed'];
        arrays.forEach((array)=> {
            if(layer.classList.contains(array)){
                layer.textContent='';
                layer.textContent = val[array];
            }
        })
    })
    let desc = val.desc;
    switch (desc){
        case 'clear sky':
            displayIcon.src = './img/sun.svg';
            break;
        case 'overcast clouds':
            displayIcon.src = './img/cloud-sun.svg';
            break;
        case 'few clouds':
            displayIcon.src = './img/clouds.svg';
            break;
        case 'broken clouds':
            displayIcon.src = './img/cloud.svg';
            break;        
        case 'scattered clouds':
            displayIcon.src = './img/clouds.svg';
            break;        
        case 'thunderstorm':
            displayIcon.src = './img/cloud-lightning-rain.svg';
            break;           
        case 'light rain':
            displayIcon.src = './img/cloud-drizzle.svg';
            break;        
        case 'moderate rain':
            displayIcon.src = './img/cloud-rain.svg';
            break;
        case 'heavy rain':
            displayIcon.src = './img/cloud-rain-heavy.svg';
            break;
        case 'mist':
            displayIcon.src = './img/cloud-haze.svg';
            break;
        case 'snow':
            displayIcon.src = './img/cloud-snow.svg';
            break;
        case 'light intensity shower rain':
            displayIcon.src = './img/cloud-drizzle.svg';
            break;        
        default:
            displayIcon.textContent = 'weather undetected';
    }

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
    }
}

userSubmitCity();
loadingDisplay('Please Wait');
