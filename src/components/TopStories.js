import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import StoriesKey from '../config.js';
import Grid from '@mui/material/Grid';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from '@material-ui/core/Typography';



function TopStories() {
  const [topStories, setTopStories] = useState([{
    "id": "465418717023142467",
    "title": "Elon Musk lives up to Twitter promise, sells $1.1 billion in Tesla shares to pay taxes",
    "url": "https://www.latimes.com/business/story/2021-11-10/elon-musk-lives-up-to-twitter-promise-sells-1-1-billion-in-tesla-shares-to-pay-taxes",
    "description": "The Tesla CEO sold about 900,000 shares of the electric car makers stock that will go toward paying tax obligations for stock options.",
    "body": "After making a promise on Twitter, Tesla CEO Elon Musk has sold about 900,000 shares of the electric car maker's stock, netting over $1.1 billion that will go toward paying tax obligations for stock options. The sales, disclosed in two regulatory filings late Wednesday, will cover tax obligations for stock options granted to Musk in September. He exercised options to buy just over 2.1 million shares for $6.24 each. The company's stock closed Wednesday at $1,067.95 per share. The transactions were automatically effected as part of a trading plan adopted on Sept. 14 to sell options that expire next year, according to forms filed with the U.S. Securities and Exchange Commission. That was nearly two months before he floated the idea of the sale on Twitter. After the transactions, Musk still owns about 170 million Tesla shares. Musk was Teslas largest shareholder as of June, owning about 17% of the company, according to data provider FactSet. Hes the wealthiest person in the world, according to Forbes, with a net worth of around $282 billion, most of it in Tesla stock. Last weekend, Musk said he would sell 10% of his holdings in the company, worth more than $20 billion, based on the results of a poll he conducted on Twitter. The sale tweets caused a sell-off of the stock Monday and Tuesday, but it recovered some on Wednesday. The shares were up 2.6% to $1,096 in extended trading Wednesday, and they have risen more than 50% this year. Wedbush Analyst Daniel Ives said it appears Musk will start selling shares as the year ends. The question will be for investors if he sells his full 10% ownership stake over the coming months or is it done piece-by-piece during 2022, Ives wrote in a note to investors. Ives calculated that Musk has about $10 billion in taxes coming due on stock options that vest next summer. The sometimes abrasive and unpredictable Musk said he proposed selling the stock as some Democrats have been pushing for billionaires to pay taxes when the price of the stocks they hold goes up, even if they dont sell any shares. However, the wording on unrealized gains, also called a billionaires tax, was removed from President Bidens budget, which is still being negotiated. Much is made lately of unrealized gains being a means of tax avoidance, so I propose selling 10% of my Tesla stock, he tweeted Saturday afternoon. Do you support this? Tesla does not pay Musk a cash salary, but he has received huge stock options. I only have stock, thus the only way for me to pay taxes personally is to sell stock, Musk tweeted. Tesla Inc. is based in Palo Alto, Calif., although Musk has announced it will move its headquarters to Texas.",
    "snippet": "The Tesla CEO sold about 900,000 shares of the electric car makers stock that will go toward paying tax obligations for stock options.\nAfter making a promise on Twitter, Tesla CEO Elon Musk has sold about 900,000 shares of the electric car maker's stock, netting over $1.1 billion that will go toward paying tax obligations for stock options.",
    "keywords": "",
    "language": "en",
    "isSafe": true,
    "datePublished": "2021-11-11T04:14:54.278",
    "provider": {
      "name": "latimes",
      "favIcon": "",
      "favIconBase64Encoding": ""
    },
    "image": {
      "url": "https://ca-times.brightspotcdn.com/dims4/default/9761f2c/2147483647/strip/true/crop/5301x2783+0+375/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F3a%2F98%2F2199e23fcaca3ab587d384677df7%2F7daef51524a44b3992612d799ae99b97",
      "height": 630,
      "width": 1200,
      "thumbnail": "https://rapidapi.usearch.com/api/thumbnail/get?value=9161671905031609899",
      "thumbnailHeight": 157,
      "thumbnailWidth": 299,
      "base64Encoding": null,
      "name": null,
      "title": null,
      "provider": {
        "name": "latimes",
        "favIcon": "",
        "favIconBase64Encoding": ""
      },
      "imageWebSearchUrl": null,
      "webpageUrl": "https://www.latimes.com/business/story/2021-11-10/elon-musk-lives-up-to-twitter-promise-sells-1-1-billion-in-tesla-shares-to-pay-taxes"
    }
  }])


  var options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI',
    params: { pageNumber: '1', pageSize: '3', withThumbnails: 'true', location: 'us' },
    headers: {
      'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
      'x-rapidapi-key': '1ba20175f4msh22832413edfd794p151e5fjsn13bee121bf04'
    }
  };

  //   useEffect(() => {
  //   getTodaysStories();
  // },[])

  const getTodaysStories = async () => {
    const apiCall = await
      axios
        .request(options)
        .then((response) => {
          console.log(response.data.value)
          setTopStories(response.data.value);
        })
        .catch((error) => {
          console.log(error);
        })
  }

  // console.log(topStories);

  // topStories.map(story => {
  //   console.log(story);
  //   console.log(story.title);

  // })

  return (
    <div>
      {topStories.map(story => (
        <Grid>
          <Typography variant="subtitle1">{story.title}</Typography>
          <Typography variant="caption">{story.snippet}</Typography>
        </Grid>
      ))}
    </div>
  )
}

export default TopStories;