import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import Grid from '@mui/material/Grid';

const client = new ApolloClient({
  uri: 'https://o5x5jzoo7z.sse.codesandbox.io/',
  cache: new InMemoryCache()
});

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.slice(0,3).map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

function CoinBase() {
  return (
    <ApolloProvider client={client}>
    <Grid>
      <Grid>Coinbase Overview</Grid>
      <Grid><ExchangeRates /></Grid>
    </Grid>
    </ApolloProvider>
  )
}

export default CoinBase;