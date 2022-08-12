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

loadingDisplay('Please Wait');

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
        // toggleDisplayOn('.loading-animation');
    }
}

userSubmitCity()