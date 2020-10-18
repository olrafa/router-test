import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const bsAsCenter = [-6505000, -4115000];
const initialZoom = 11;

const mapView = new View({
  center: bsAsCenter,
  zoom: initialZoom
});

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: mapView
});

const homeBtn = document.createElement('button');
homeBtn.innerHTML = '🌎';
homeBtn.title = 'Reset map';
homeBtn.onclick = () => {
  mapView.setCenter(bsAsCenter);
  mapView.setZoom(initialZoom);
};

const zoomControls = document.querySelector('.ol-zoom');
zoomControls.appendChild(homeBtn);
