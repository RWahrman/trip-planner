const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken =
  "pk.eyJ1IjoicndhaHJtYW4iLCJhIjoiY2s3dXZqd2ttMTV1dTNlbnF6bW83MjIwOSJ9.GISqLzB3By9cnceIUy6QaA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
