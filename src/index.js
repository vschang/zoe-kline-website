import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Loader } from "@googlemaps/js-api-loader"

const loader = new Loader({
  apiKey: process.env.REACT_APP_API_KEY,
  version: "weekly",
});

loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary("maps");

  Map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
