import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { myKey } from '../config.js';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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
      myKey
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
    <Box>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        {weather.main.temp}°
      </Grid>
      <Grid item xs={12} sm={12} container>
      <Grid item xs={6} sm={4}>
        <Grid>Min</Grid>
        <Grid>{weather.main.temp_min}°</Grid>
      </Grid>
      <Grid item xs={6} sm={4}>
        <Grid>Max</Grid>
        <Grid>{weather.main.temp_max}°</Grid>
      </Grid>
      <Grid item xs={6}sm={4}>
        <Grid>Humidity</Grid>
        <Grid>{weather.main.humidity}%</Grid>
      </Grid>
      </Grid>
    </Grid>
    </Box>
  );
}

export default Weather;