import './App.css';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Weather from './components/Weather.js';
import TopStories from './components/TopStories.js';
import CovidChart from './components/CovidChart.js';
import CoinBase from './components/Coinbase.js';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

const theme = React.useMemo(
  () =>
    createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
      },
    }),
  [prefersDarkMode],
);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Item>Good Morning!</Item>
      </Grid>
      <Grid item xs={4}>
          <Item><Weather /></Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Coinbase</Item>
        <Item><CoinBase /></Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Texas Covid Chart</Item>
        <Item><CovidChart /></Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
        <Typography variant="h4" >Top Stories</Typography>
        </Item>
        <Item><TopStories /></Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Router UP/DOWN Metrics</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Plex Stats</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Unread Emails</Item>
      </Grid>

    </Grid>
    </ThemeProvider>
  );
}

export default App;