import React, { useEffect, useState } from "react";
import NearbyAirportSearcher from "./NearbyAirportSearcher";
//import './inline.css';
function WeatherCard({ weatherData }) {
  const [showNearbyAirportSearcher, setShowNearbyAirportSearcher] = useState(false);

  useEffect(() => {
    if (weatherData) {
      const conditionsMet = checkWeatherConditions(weatherData.wind.speed, weatherData.visibility.km);
      if (!conditionsMet) {
        setShowNearbyAirportSearcher(true);
      }
    }
  }, [weatherData]);

  const checkWeatherConditions = (windSpeed, visibility) => {
    const minVisibility = 1.0; // Minimum visibility in km
    const maxWindSpeed = 1.0; // Maximum wind speed in km/h

    if (visibility < minVisibility) {
      alert(`Cannot fly because visibility is too low. Flight will be delayed.`);
      return false;
    }

    if (windSpeed > maxWindSpeed) {
      alert(`Cannot fly because wind speed is too high. Flight will be delayed.`);
      return false;
    }

    return true;
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full space-between">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Weather Conditions</h2>
        <p>Location: {weatherData.location}</p>
        <p>Condition: {weatherData.text}</p>
        <p>Temperature: {weatherData.temperature.celsius}°C</p>
        <p>Wind Speed: {weatherData.wind.speed} km/h</p>
        <p>Wind Direction: {weatherData.wind.direction}</p>
        <p>Visibility: {weatherData.visibility.km} km</p>
        <p>Humidity: {weatherData.humidity}%</p>
        <p>Pressure: {weatherData.pressure.mb} mb</p>
        <p>Cloud Cover: {weatherData.cloudCover}%</p>
        <p>UV Index: {weatherData.uvIndex}</p>
        <p>Last Updated: {weatherData.lastUpdated}</p>
      </div>
      <div className="w-full md:w-1/2">
        {showNearbyAirportSearcher && <NearbyAirportSearcher />}
      </div>
    </div>
  );
}

export default WeatherCard;
