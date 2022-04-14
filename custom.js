// JavaScript for enabling the map on load. Change the access token and the web page.

mapboxgl.accessToken = 'pk.eyJ1IjoidHVuZHJhdGhlcmFpbXkiLCJhIjoiY2wxdzV6czg2MW02azNpcXNjOXQxYjh5cSJ9.B-hTJxiaSAX1AlG6_a7F2g';

window.onload = function() {
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/tundratheraimy/cl1yvgvgr005a14lf6mc5ygti', // style URL
    center: [77.0688997, 20.5272803], // starting position [lng, lat]
    zoom: 4 // starting zoom
  });
};
