const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken =
  "pk.eyJ1IjoicndhaHJtYW4iLCJhIjoiY2s3dXZqd2ttMTV1dTNlbnF6bW83MjIwOSJ9.GISqLzB3By9cnceIUy6QaA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const markerHotels = buildMarker("hotels", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
markerHotels.addTo(map);

const markerActivities = buildMarker("activities", [-74.009151, 47.705086]); // or [-87.6354, 41.8885]
markerActivities.addTo(map);

const markerRestaurants = buildMarker("restaurants", [-74.009151, 42.705086]); // or [-87.6354, 41.8885]
markerRestaurants.addTo(map);

console.dir(markerActivities, markerRestaurants);
