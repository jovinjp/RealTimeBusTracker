const busStops = [
  [-71.08430208, 42.34222241],
  [-71.08373, 42.32988],
  [-71.09190328, 42.35569503],
  [-71.11634544, 42.37119303],
  [-71.08412507, 42.34226185],
  [-71.08373, 42.32988],
  [-71.11746, 42.37307],
  [-71.09240551, 42.35688732],
  [-71.11631221, 42.3711808],
  [-71.08295033, 42.34138113],
  [-71.08373, 42.32988],
  [-71.11746, 42.37307],
  [-71.09246289, 42.35698517],
  [-71.11479952, 42.370650779],
  
  ];

//
mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhZG9nZW5lc2lzIiwiYSI6ImNsNm4wNTM0ZDBxYzQzZG96a3J1eGxseGYifQ.ARomU9hs2fIlX7P0RdiE7w';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.09240551, 42.35688732],
    zoom: 14,
  });
  
  var marker = new mapboxgl.Marker({ color: "#82ABE2", scale: 1})
    .setLngLat([-71.08430208, 42.34222241])
    .addTo(map);
  
  let counter = 0;
  function move() {
    
    setTimeout(() =>{

      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }
