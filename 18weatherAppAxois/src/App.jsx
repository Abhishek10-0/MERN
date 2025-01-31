import React,{useState} from 'react'
import axios from 'axios'

function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)


  const weatherDetails = async () => {

    if (city.trim() === "") return;

    const API_KEY = "d0d5551b4e684609a8972501253101";
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

    try{
      const response = await axios.get(url);

      setWeather(response.data)
      console.log(response.data)
    }
    catch(error) {
      console.log(error)
    }
  }

  return (
    <>

    <input 
    type="text"
    value={city}
    placeholder='Enter City....'
    onChange={(e) => setCity(e.target.value)}
     />

     <button onClick={weatherDetails}>
      Submit
     </button>
    

    {weather && <div>
          <h2>{weather.location.name}, {weather.location.country}</h2>
          <p>{weather.current.condition.text}</p>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind Speed: {weather.current.wind_kph} km/h</p>
          <img src={weather.current.condition.icon} alt="Weather Icon" />
        </div>}
    </>
  )
}

export default App