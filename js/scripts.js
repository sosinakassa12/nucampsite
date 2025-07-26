console.log('javascript connected!');
    
const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 5000,
    pause: false
})

// when the pause button is clicked, pause the carousel
const carouselBtton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselBtton.addEventListener('click', function() {
    if(faIcon.classList.contains('fa-pause')){
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    }else{
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
    
})

// when the play button is clicked, begin cycling through the images
// const carouselPlay = document.getElementById('carouselPlay');
// carouselPlay.addEventListener('click', function() {
//     console.log('cycle the carousel');
//     carousel.cycle();
//})

async function fetchData() {
    try{
        const apiKey = process.env.OPEN_WEATHER_API_KEY;
        const city = "Minnesota";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        displayData(data.weather, data.main);
        showExtraWeather(data);   
    }catch(error){
        console.log(error);
    }     
}

fetchData();

function displayData(dataWeather, dataMain){
    const img = document.createElement('img');
    img.src = `https://openweathermap.org/img/w/${dataWeather[0].icon}.png`;
    img.alt = "Weather Icon";
    console.log(dataWeather[0].icon);

    const imgIcon = document.getElementById('weather-icon');
    imgIcon.innerHTML = ''; // clear any previous icon if needed
    imgIcon.appendChild(img);

    const weatherTemp =document.getElementById('weather-temp').textContent = `${Math.round(dataMain.temp)}\u00B0C`;
    console.log(weatherTemp);
    const weatherDescription =document.getElementById('weather-description').textContent = dataWeather[0].description;
    console.log(weatherDescription);
}

function showExtraWeather(data) {
    const weatherDiv = document.getElementById('weather');

    const feelsLike = `Feels like: ${Math.round(data.main.feels_like)}°C`;
    const humidity = `Humidity: ${data.main.humidity}%`;
    const wind = `Wind: ${data.wind.speed} m/s`;
    const condition = `Condition: ${data.weather[0].main}`;

    console.log(feelsLike);
    console.log(humidity);
    console.log(wind);
    console.log(condition);
    const extra = document.createElement('div');
    extra.innerHTML = `
        <p>${feelsLike}</p>
        <p>${humidity}</p>
        <p>${wind}</p>
        <p>${condition}</p>
    `;

    weatherDiv.appendChild(extra);
}

