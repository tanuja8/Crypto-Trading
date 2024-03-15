import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../config/api'
import {CryptoState} from "../Cryptocontex"
import axios from 'axios'
import { makeStyles } from '@material-ui/core'
import CoinInfo from '../components/CoinInfo'

const Coinpage = () => {
  const {id}=useParams()
  const [coin,setCoin]=useState()
  const {currency,symbol}=CryptoState();
  const fetchCoin= async()=>{
    const {data}= await axios.get(SingleCoin(id));
    setCoin(data);
    };
    console.log(coin)
    useEffect(()=>{
      fetchCoin()
    },[]);

    // const useStyles=makeStyles((theme)=>({
    //   container:{
    //     width:"30%",
    //     [theme.breakpoints.down("md")]:{
    //       flexDirection:"center",
    //     },
    //     display:"flex",
    //     alignItems:"center",
    //     marginTop:25,
    //     borderRight:"2px solid grey",
        
    //   },
    // }));
    // const classes=useStyles();


  return (
    
    <div >
      <div className=' container sidebar'>
        <h1>coininfo</h1>
        {/* sidebar */}
      </div>
      {/* chart */}
      <CoinInfo coin={coin}/>
    </div>
  )
}

export default Coinpage
