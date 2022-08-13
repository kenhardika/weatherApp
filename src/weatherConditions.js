function updateWeatherIcon(val, target) { // target = '.display.icon img'
  const displayIcon = document.querySelector(target);
  const { desc } = val;
  switch (desc) {
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
    case 'shower rain':
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
    case 'heavy intensity rain':
      displayIcon.src = './img/cloud-rain-heavy.svg';
      break;
    case 'haze':
      displayIcon.src = './img/cloud-haze.svg';
      break;
    default:
      displayIcon.textContent = 'weather undetected';
  }
}

export default updateWeatherIcon;
