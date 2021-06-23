import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { GOOGLE_ANALYTICS_ID } from './constants';

// Google Analytics loading
if (process.env.NODE_ENV === "production") {
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GOOGLE_ANALYTICS_ID);
} else {
  console.info("Not loading Google Analytics in " + process.env.NODE_ENV + " environment")
}






const listing = await seaport.createSellOrder({
  asset: {
    tokenId:151,
    tokenAddress:0xf2febe0fc74ebea939240851686d5b5455d200ab,
  },
  accountAddress : 0xf7d929ac10c1b5a5a9fd417e5ec678bb02f78b8c,
  startAmount: 3,
  // If `endAmount` is specified, the order will decline in value to that amount until `expirationTime`. Otherwise, it's a fixed-price order:
  //endAmount: 0,
  //expirationTime
})


// Main render action
ReactDOM.render(<App />, document.getElementById('root'));
