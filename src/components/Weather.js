import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
  const[temp, setTemp] = useState('');
  //const[weather, setWeather] = useState('');
  const[weather, setWeather] = useState({
    "coord": {
      "lon": -95.3633,
      "lat": 29.7633
  },
  "weather": [
      {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 68.38,
      "feels_like": 68.63,
      "temp_min": 64.9,
      "temp_max": 71.74,
      "pressure": 1019,
      "humidity": 79
  },
  "visibility": 10000,
  "wind": {
      "speed": 3,
      "deg": 137,
      "gust": 8.01
  },
  "clouds": {
      "all": 1
  },
  "dt": 1636503633,
  "sys": {
      "type": 2,
      "id": 2006306,
      "country": "US",
      "sunrise": 1636461693,
      "sunset": 1636500550
  },
  "timezone": -21600,
  "id": 4699066,
  "name": "Houston",
  "cod": 200
});


  const options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
      q: 'Houston',
      lat: '0',
      lon: '0',
      id: '2172797',
      lang: 'null',
      units: 'imperial',
    },
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': '1ba20175f4msh22832413edfd794p151e5fjsn13bee121bf04'
    }
  };

  // useEffect(() => {
  //   getTodaysWeather();
  // },[])

  // const getTodaysWeather = async () => {
  //   const apiCall = await
  //     axios
  //     .request(options)
  //     .then((response) => {
  //       console.log(response.data)
  //       setWeather(response.data);
  //       setTemp(response.data.main.temp)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  return (
    <div>
      <div>
        {weather.main.temp}
      </div>
    </div>
  );
}

export default Weather;