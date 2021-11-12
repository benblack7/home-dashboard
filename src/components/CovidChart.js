import React, { useState, useEffect } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import covidData from '../covidData.js';


function CovidChart() {

  //const [covidData, setCovidData] = useState([]);

  var options = {
    method: 'GET',
    url: 'https://coronavirus-smartable.p.rapidapi.com/stats/v1/US-TX/',
    headers: {
      'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com',
      'x-rapidapi-key': '1ba20175f4msh22832413edfd794p151e5fjsn13bee121bf04'
    }
  };

  // useEffect (() => {
  //   getCovidData();
  // },[])

  // const getCovidData = async () => {
  //   const apiCall = await
  //     axios
  //     .request(options)
  //     .then((response) => {
  //       console.log(response.data)
  //       setCovidData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  return (
    <div>
      <Grid>
        {covidData.stats.newDeaths}
      </Grid>
      {/* <XYPlot height={300} width={300}>
        <XAxis />
        <YAxis />
        <LineSeries data={covidData} />
      </XYPlot> */}
    </div>
  )
}

export default CovidChart;