import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Header = () => {
  return (
  <AppBar color='transparent' position='static'>
    <Container>
      <Toolbar>
        <Typography>
          Crypto Trading
          <Select variant='outlined' style={{
            width:100,
            height:40,
            marginLeft:15,
          }}>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Typography>
      </Toolbar>
    </Container>

    </AppBar>
  )
}

export default Header
