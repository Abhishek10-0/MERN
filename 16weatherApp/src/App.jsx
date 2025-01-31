import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const weatherDetails = async () => {
    if (city.trim() === "") return;

    const API_KEY = "d0d5551b4e684609a8972501253101";
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
        setError(null); // Clear any previous errors
      } else {
        setError("City not found!");
        setWeather(null);
      }
    } catch {
      setError("Something went wrong!");
      setWeather(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        placeholder="Enter City Name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={weatherDetails}>Submit</button>

     
      {error && <p>{error}</p>}

     
      {weather && (
        <div>
          <h2>{weather.location.name}, {weather.location.country}</h2>
          <p>{weather.current.condition.text}</p>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind Speed: {weather.current.wind_kph} km/h</p>
          <img src={weather.current.condition.icon} alt="Weather Icon" />
        </div>
      )}
    </div>
  );
}

export default App;
