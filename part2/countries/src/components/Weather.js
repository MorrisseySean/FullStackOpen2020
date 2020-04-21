import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ country }) => {
  const [weather, setWeather] = useState([]);

  const weatherHook = () => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${
          process.env.REACT_APP_API_KEY
        }&query=${country.toLowerCase()}`
      )
      .then((response) => {
        if (response.data.current) {
          setWeather(response.data.current);
        }
      });
  };

  useEffect(weatherHook, [{ country }]);

  if (weather.temperature) {
    return (
      <div>
        <p>Temperature: {weather.temperature} Celsius</p>
        <p>
          Wind: direction - {weather.wind_degree}degrees{weather.wind_dir}
          <br />
          speed - {weather.wind_speed}mph
        </p>
        <img
          src={weather.weather_icons[0]}
          alt={weather.weather_descriptions[0]}
        />
      </div>
    );
  } else {
    return <p>Recieving weather data...</p>;
  }
};

export default Weather;
