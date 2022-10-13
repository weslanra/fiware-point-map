let mapOptions = {
    center:[40.6349, -8.6535],
    zoom:15
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let marker = new L.Marker([40.6349, -8.6535]);
marker.addTo(map);

let marker2 = new L.marker([40.64015, -8.64523])