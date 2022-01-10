const apiKey = `d884beae35019f72078bfa1cd9bf1522`
// mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXp6eTMwIiwiYSI6ImNrdGVhM2txYjJubDYycHI1aDI2MHFzb24ifQ.WjQZSwT3Br9y0Q0-MtOFww';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11', 
center: [106, -6], 
zoom: 2 
});
// adding event listener to the map
map.on('click', e => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}&units=metric&appid=${apiKey}`)
    .then(response => {
        console.log(`Response :`, response);
        return response.json();
    })
    .then(data => {
        // adding data to the HTML
        const city = document.getElementById('city');
        const temp = document.getElementById('temp');
        const humidity = document.getElementById('humid');
        const wind = document.getElementById('wind');
        const country = document.getElementById('country');

        city.innerHTML = `${data.name}`;
        temp.innerHTML = `${data.main.temp} celcius`;
        humidity.innerHTML = `${data.main.humidity} degrees`;
        wind.innerHTML = `${data.wind.speed}`;
        country.innerHTML = `${data.sys.country}`;
    })
    .catch(error => console.log(error));
})

// getting forecast
const dayOne = document.getElementById('dayOne');
const dayTwo = document.getElementById('dayTwo');
const dayThree = document.getElementById('dayThree');
const day__item = document.querySelectorAll('.day__item');

day__item.forEach(item => {
    item.addEventListener('click', e => {
        const city = document.getElementById('city');
        const target = e.target;
        if (target.id === 'dayOne') {
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city.innerHTML}&cnt=1&units=metric&appid=${apiKey}`)
            .then(response => {
                console.log(`Response :`, response);
                return response.json();
            })
            .then(data => {
                // change inner HTML of respective indicators
            })
            .catch(error => console.log(error));
        }
    })
})


// showing sidebar
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
