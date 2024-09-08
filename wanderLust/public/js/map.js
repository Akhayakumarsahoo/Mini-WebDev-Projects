mapboxgl.accessToken =
  "pk.eyJ1IjoiaXRzc2FyYW5oZXJlIiwiYSI6ImNsd3B3aDFybjFodTMyaXJ6cGQxeWdwYzcifQ.4HPJRlRvgTdHaXXTDQEWCg";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 15, // starting zoom
});
const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(`<h2>${listing.location}</h2>`)
  )
  .addTo(map);
