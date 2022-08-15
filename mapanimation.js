const busStops = [
    [-71.093729, 42.359244],
    [-71.0958, 42.360698],
    [-71.103476, 42.365248],
    [-71.108717, 42.368355],
    [-71.113095, 42.370218],
    [-71.118625, 42.374863],
  ];

mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhZG9nZW5lc2lzIiwiYSI6ImNsNm4wNTM0ZDBxYzQzZG96a3J1eGxseGYifQ.ARomU9hs2fIlX7P0RdiE7w';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });
  
  var marker = new mapboxgl.Marker()
    .setLngLat([-71.093729, 42.359244]) 
    .addTo(map);
  
  let counter = 0;
  function move() {
    setTimeout(() =>{
      if (counter >= bustops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }
  
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
