import React, { useState, useEffect } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import covidData from '../covidData.js';



function CovidChart() {

  //const [covidData, setCovidData] = useState([]);

  const historyFormat = () => {

  };

  var options = {
    method: 'GET',
    url: 'https://coronavirus-smartable.p.rapidapi.com/stats/v1/US-TX/',
    headers: {
     //covidKey
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
    <Grid>
      <Grid>
        <Grid>New Cases</Grid>
        <Grid>{covidData.stats.newlyConfirmedCases}</Grid>
      </Grid>
      <Grid>
      {/* <XYPlot height={300} width={300}>
        <LineSeries data={covidData} />
      </XYPlot> */}
      </Grid>
    </Grid>
  )
}

export default CovidChart;