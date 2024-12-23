// import React, { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchMapData } from '../actions/mapActions';
// import axios from 'axios';

// const MapComponent = () => {
//   const dispatch = useDispatch();
//   const mapData = useSelector(state => state.map.data);
//   const mapRef = useRef(null);

//   useEffect(() => {
//     dispatch(fetchMapData());

//     return () => {
//       if (mapRef.current) {
//         mapRef.current.remove();
//       }
//     };
//   }, [dispatch]);

//   useEffect(() => {
//     if (mapData && !mapRef.current) {
//       mapRef.current = L.map('map').setView([51.505, -0.09], 13);

//       // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       //   attribution: '&copy; OpenStreetMap contributors',
//       // }).addTo(mapRef.current);

//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       }).addTo(mapRef.current);

//       // Add Satellite View layer
//       L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
//         attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
//       }).addTo(mapRef.current);

//       // Add Terrain View layer
//       L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//       }).addTo(mapRef.current);

//       // Add markers or layers based on mapData
//       mapData.forEach(item => {
//         L.marker([item.lat, item.lng]).addTo(mapRef.current)
//           .bindPopup(item.name)
//           .openPopup();
//       });

//       // Add placeholder image
//       // const img = document.createElement('img');
//       // img.src = require('./assets/images.jpg'); // Require relative path
//       // img.alt = 'Placeholder Image';
//       // mapRef.current.appendChild(img);
//     }
//   }, [mapData]);

//   return (
//     <div id="map" style={{ height: '600px', width: '100%' }}></div>
//   );
// };

// export default MapComponent;
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMapData } from '../actions/mapActions';

const MapComponent = () => {
  const dispatch = useDispatch();
  const mapData = useSelector(state => state.map.data);
  const mapRef = useRef(null);

  useEffect(() => {
    dispatch(fetchMapData());

    return () => {
      if (mapRef.current) {
        mapRef.current.remove(); // Cleanup map instance on unmount
      }
    };
  }, [dispatch]);

  useEffect(() => {
    if (mapData && !mapRef.current) {
      // Initialize Leaflet map instance
      mapRef.current = L.map('map').setView([51.505, -0.09], 13); // Default view

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      // Add Satellite View layer
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      }).addTo(mapRef.current);

      // Add Terrain View layer
      L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(mapRef.current);

      // Add markers or layers based on mapData
      mapData.forEach(item => {
        L.marker([item.lat, item.lng]).addTo(mapRef.current)
          .bindPopup(item.name)
          .openPopup();
      });
    }
  }, [mapData]); // Reinitialize map when mapData changes

  return (
    <div id="map" style={{ height: '600px', width: '100%' }}></div>
  );
};

export default MapComponent;  