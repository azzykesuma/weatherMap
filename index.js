
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
    fetch(`api.openweathermap.org/data/2.5/weather?lat='+e.lngLat.lon+'&lon='+e.lngLat.lon+'&appid={d884beae35019f72078bfa1cd9bf1522}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));
    console.log(e.lngLat.lat);
})


// showing sidebar
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
