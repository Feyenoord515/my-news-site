import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
console.log(currentTime.toLocaleString())
console.log(currentTime)
  useEffect(() => {
    // Obtener datos del clima actual utilizando la API de OpenWeatherMap
    const apikey = 'e252abb16f695b16ddcbdd6c5bad5c91'
    const fetchWeatherData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location?.latitude}&lon=${location?.longitude}&appid=${apikey}`
      );
      const data = await response.json();
      setWeatherData(data);
    };
  
    if (location) {
      fetchWeatherData();
    }
  }, [location]);
  

  useEffect(() => {
    // Obtener la ubicación actual utilizando la API de geolocalización de JavaScript
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            setLocation(position.coords);
          },
          error => console.log(error),
          { timeout: 5000 }
        );
      }
    };

    getLocation();

    // Actualizar la hora cada minuto
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(intervalID);
  }, []);
console.log(weatherData)
  return (
    <div className="flex items-center">
      {location ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16 6a4 4 0 10-8 0 4 4 0 008 0zm-3.39 8.61a2 2 0 11-2.83-2.83 2 2 0 012.83 2.83zm5.66-5.66a2 2 0 11-2.83 2.83 2 2 0 012.83-2.83zm-14.14 0a2 2 0 112.83-2.83 2 2 0 01-2.83 2.83zm5.66 5.66a2 2 0 11-2.83-2.83 2 2 0 012.83 2.83z"
              clipRule="evenodd"
            />
          </svg>
          {weatherData ? (
            <>
              {weatherData.name}, {weatherData.sys.country} |{' '}
              {Math.round(weatherData.main.temp - 273.15)}°C
            </>
          ) : (
            'Loading weather data...'
          )}
        </>
      ) : (
        'Loading location data...'
      )}
      <span className="ml-auto">
  {currentTime.toLocaleString(undefined, {
    timeStyle: 'short',
    dateStyle: 'long',
    hour12: true,
  })}
</span>
     {/* <span className="ml-auto">{currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })}</span> */}

    </div>
  );
};

export default WeatherInfo;
