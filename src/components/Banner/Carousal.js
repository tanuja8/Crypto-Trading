import { makeStyles } from '@material-ui/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TrendingCoins } from '../../config/api';
import { CryptoState } from '../../Cryptocontex';
import AliceCarousel from 'react-alice-carousel';
import { Link } from "react-router-dom";

const useStyles=makeStyles((thems)=>({
  Carousal:{
    height:"50%",
    display:"flex",
    alignItems:"center",
  }  
}));

const Carousal = () => {
    const classes=useStyles();
    const[trending,setTrending]=useState([]);
     const { currency }= CryptoState();

    const fetchTrendingCoins=async()=>{
        const {data}=await axios.get(TrendingCoins(currency))
        setTrending(data)
    };
    console.log(trending)
    useEffect(()=>{
      fetchTrendingCoins();
        },[currency]);


        const items=trending.map((coin) =>{
          let profit=coin.price_change_percentage_24th >=0;
          return(
            <Link
            className={classes.CarousalItem} to={`/coins/${coin.id}`}>
              <img
              src={coin?.image}
              alt={coin.name}
              height="80"
              style={{marginBottom:10}}
              />
              <span>
                {coin?.symbol}
              &nbsp;
              <span>
                {profit && "+"}
                {coin?.price_change_percentage_24h?.toFixed(2)}%
              </span>
              </span>
              </Link>
            
          )
        })

        const responsive = {
          0: {
            items: 2,
          },
          512: {
            items: 4,
          },
        };
  return (
    <div className={classes.Carousal}>
     <AliceCarousel
     mouseTracking
     infinite
     autoPlayInterval={1000}
     animationDuration={1500}
     disableDotsControls
     disableButtonsControls
     responsive={responsive}
     autoPlay
     items={items}
     />
    </div>
  )
}

export default Carousal
