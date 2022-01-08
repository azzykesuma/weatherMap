import mapboxgl from "mapbox-gl";
// showing sidebar
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// map init



mapboxgl.accessToken = 'pk.eyJ1IjoiYXp6eTMwIiwiYSI6ImNrdGVhM2txYjJubDYycHI1aDI2MHFzb24ifQ.WjQZSwT3Br9y0Q0-MtOFww';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});