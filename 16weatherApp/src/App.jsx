import React from "react";

function App() {

  const weatherDetails = () => {
    
  }

  return (
  <>
  <input 
  type="text" 
  value={city}
  placeholder="Enter City Name"
  onChange={(e) => cityName(e.target.value)}
  />

  <button onClick={weatherDetails}>
    Submit
  </button>
  </>
  );
}

export default App;
