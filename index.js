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
        const temp = document.getElementById('temp');
        const humidity = document.getElementById('humid');
        const wind = document.getElementById('wind');
        const country = document.getElementById('country');
        const target = e.target;
        if (target.id === 'dayOne') {
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city.innerHTML}&cnt=1&units=metric&appid=${apiKey}`)
            .then(response => {
                console.log(`Response :`, response);
                return response.json();
            })
            .then(data => {
                // change inner HTML of respective indicators
                console.log(data);
                city.innerHTML = `${data.city.name}`;
                temp.innerHTML = `${data.list[0].main.temp} celcius`;
                humidity.innerHTML = `${data.list[0].main.humidity} degrees`;
                wind.innerHTML = `${data.list[0].wind.speed}`;
                country.innerHTML = `${data.city.country}`;
            })
            .catch(error => console.log(error));
        } else if(target.id === 'dayTwo') {
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city.innerHTML}&cnt=2&units=metric&appid=${apiKey}`)
            .then(response => {
                console.log(`Response :`, response);
                return response.json();
            })
            .then(data => {
                // change inner HTML of respective indicators
                console.log(data);
                city.innerHTML = `${data.city.name}`;
                temp.innerHTML = `${data.list[1].main.temp} celcius`;
                humidity.innerHTML = `${data.list[1].main.humidity} degrees`;
                wind.innerHTML = `${data.list[1].wind.speed}`;
                country.innerHTML = `${data.city.country}`;
            })
            .catch(error => console.log(error));
        } else if(target.id === 'dayThree') {
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city.innerHTML}&cnt=3&units=metric&appid=${apiKey}`)
            .then(response => {
                console.log(`Response :`, response);
                return response.json();
            })
            .then(data => {
                // change inner HTML of respective indicators
                console.log(data);
                city.innerHTML = `${data.city.name}`;
                temp.innerHTML = `${data.list[2].main.temp} celcius`;
                humidity.innerHTML = `${data.list[2].main.humidity} degrees`;
                wind.innerHTML = `${data.list[2].wind.speed}`;
                country.innerHTML = `${data.city.country}`;
            })
            .catch(error => console.log(error));
        }
    })
})

// searchbar function
const searchCity = document.getElementById('searchCity');
const submitCity = document.getElementById('submitCity');

submitCity.addEventListener('click', e => {
    e.preventDefault();
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&units=metric&appid=${apiKey}`)
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
    .catch(err => console.log(err));
})

// incrementing date 
const date = new Date();
dayOne.innerHTML = new Date(date.getTime() + 1000*60*60*24).toDateString();
dayTwo.innerHTML = new Date(date.getTime() + 2000*60*60*24).toDateString();
dayThree.innerHTML = new Date(date.getTime() + 3000*60*60*24).toDateString();


// showing sidebar
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// feedback function
const feedback = document.getElementById('feedback');
feedback.addEventListener('click', () => {
    prompt('Enter your feedback');
})

// about function
const about = document.getElementById('about');
about.addEventListener('click', () => {
    alert('This is a weather app made by Azzy Kesuma for the purpose of portofolio');
})

// email and call function
const email = document.getElementById('email');
const call = document.getElementById('call');

email.addEventListener('click', () => {
    window.location.href = 'mailto:official.azzy@gmail.com';
})

call.addEventListener('click', () => {
    alert('You can call me on +62 85866195626');
})

