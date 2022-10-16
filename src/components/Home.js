import React, { useEffect, useState } from 'react';
import MarketPlace from './MarketPlace';

// Context API
import { useStateValue } from '../contextapi/StateProvider';

//CSS
import './styles/Home.css';

const Home = () => {
  const [{wallet}] = useStateValue();
  console.log("Wallet from home!")
  console.log(wallet);
  return (
        <div className='home'>
          <MarketPlace />
        </div>  
      )
}

export default Home