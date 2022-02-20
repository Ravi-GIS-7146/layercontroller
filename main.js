var map = L.map('map').setView([24.782784, 93.885895], 13);
// osm map

osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// google satellite

googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
// hybrid

googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
var singleMarker = L.marker([24.782784, 93.885895]).addTo(map)
    .bindPopup('Imphal west.,,!!!!<br> Manipur,India')
    .openPopup();


var baseMaps = {
    "osm": osm,
    "google maps": googleStreets,
    "Hybrid": googleHybrid
};
var overlayMaps = {
    "marker": singleMarker
};
L.control.layers(baseMaps, overlayMaps).addTo(map);