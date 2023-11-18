import { AppBar, Container, MenuItem, Select, Toolbar, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { CryptoState } from '../Cryptocontex'
const useStyles=makeStyles(()=>({
  title:{
    flex:1,
    fontWeight:"bold",
    cursor:"pointer",
  }
}))
const Header = () => {
  const classes =useStyles()
  const {currency , setCurrency}=CryptoState();
  return (
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
  )
}

export default Header
