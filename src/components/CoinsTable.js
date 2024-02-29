import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import axios from "axios";
import { CryptoState } from "../Cryptocontex";
import { Container, CssBaseline, ThemeProvider, Typography, createTheme } from "@material-ui/core";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const { currency } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };
  console.log(coins);
  useEffect(() => {
    fetchCoins();
  }, [currency]);

    const darkTheme=createTheme({
      palette:{
        primary:{
          main:"#fff",
        },
        type:"dark",
      }
    })

  return(
<ThemeProvider theme={darkTheme}>
<CssBaseline/>
    <Container style={{textAlign:"center"}}>
      <Typography variant="h4" style={{margin:18}}>Cryptocurrency Price by Market Cap</Typography>
    </Container>
</ThemeProvider>
  ) 
};

export default CoinsTable;
