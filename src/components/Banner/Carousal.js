import { makeStyles } from '@material-ui/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TrendingCoins } from '../../config/api';
import { CryptoState } from '../../Cryptocontex';

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
  return (
    <div className={classes.Carousal}>
      Carousal
    </div>
  )
}

export default Carousal
