import { AppBar, Container, MenuItem, Select, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { createTheme, ThemeProvider,} from "@material-ui/core/styles";
import React from 'react'
import { CryptoState } from '../Cryptocontex'
const useStyles=makeStyles(()=>({
  title:{
    flex:1,
    color:"gold",
    fontWeight:"bold",
    cursor:"pointer",
  }
}));
const darkTheme=createTheme({
  palette:{
    primary:{
      main:"#fff",
    },
    type:"dark"
  }
})
const Header = () => {
  const classes =useStyles()
  const {currency , setCurrency}=CryptoState();
  console.log(currency)
  return (
  <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
    <Container>
      <Toolbar>
        <Typography  className={classes.title}>
          Crypto Trading
          </Typography>
          <Select variant='outlined' style={{
            width:100,
            height:40,
            marginLeft:15,
          }}
          value={currency} onChange={(e)=> setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
      </Toolbar>
    </Container>

    </AppBar>
  </ThemeProvider>
  )
}

export default Header
