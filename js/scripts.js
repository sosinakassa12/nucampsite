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
    try {
        const apiKey = process.env.OPEN_WEATHER_API_KEY; // Get API key from environment variable
        const city = "Minnesota";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`; // Use metric units (Celsius)

        let response = await fetch(url); // Wait for the API response
        let data = await response.json(); // Parse JSON response
        console.log(data); // Debug: log the full data object

        displayData(data.weather, data.main); // Show basic weather info (icon, temp, description)
        showExtraWeather(data); // Show extra weather info like humidity, wind, etc.
    } catch (error) {
        console.log(error); // Log any errors if the fetch fails
    }     
}

fetchData();

function displayData(dataWeather, dataMain){
     const img = document.createElement('img'); // Create image element for the weather icon
    img.src = `https://openweathermap.org/img/w/${dataWeather[0].icon}.png`; // Set icon URL
    img.alt = "Weather Icon";
    console.log(dataWeather[0].icon); // Debug: log the icon code

    const imgIcon = document.getElementById('weather-icon'); // Target the icon container
    imgIcon.innerHTML = ''; // Clear any existing image
    imgIcon.appendChild(img); // Add the new weather icon

    // Set the temperature element text to current temp in °C
    const weatherTemp = document.getElementById('weather-temp').textContent = `${Math.round(dataMain.temp)}\u00B0C`;
    console.log(weatherTemp); // Debug

    // Set the weather description (e.g., "clear sky")
    const weatherDescription = document.getElementById('weather-description').textContent = dataWeather[0].description;
    console.log(weatherDescription); // Debug
}

// Displays additional weather details (feels like temp, humidity, wind, etc.)
function showExtraWeather(data) {
    const weatherDiv = document.getElementById('weather'); // Get main weather container

    // Format extra weather info into readable strings
    const feelsLike = `Feels like: ${Math.round(data.main.feels_like)}°C`;
    const humidity = `Humidity: ${data.main.humidity}%`;
    const wind = `Wind: ${data.wind.speed} m/s`;
    const condition = `Condition: ${data.weather[0].main}`;

    // Log extra info for debugging
    console.log(feelsLike);
    console.log(humidity);
    console.log(wind);
    console.log(condition);

    // Create a new <div> to hold extra weather info
    const extra = document.createElement('div');
    extra.innerHTML = `
        <p>${feelsLike}</p>
        <p>${humidity}</p>
        <p>${wind}</p>
        <p>${condition}</p>
    `;

    weatherDiv.appendChild(extra); // Append extra info to the main weather container
}

