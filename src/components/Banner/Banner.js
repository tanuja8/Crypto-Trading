import { Container, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles=makeStyles(() =>({
   banner:{
    background:"url(./banner.jpg)",
    backgroundSize:"cover",
   } ,
   bannerContent:{
    height :500,
    display:"flex",
    flexDirection:"column",
    paddingTop:25,
    justifyContent:"space-around",
   },
}))
const Banner = () => {
  const classes=useStyles()
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}> 
          <Typography 
          variant="h2"
          style={{
            fontWeight:"bold",
            marginBottom:15,
            color:"white"
          }}
          >
            Crypto Hunter
          </Typography>
          <Typography 
          variant="subtitle2"
          style={{
            color:"darkgray",
            textTransform:"capitalize"
          }}>
            Get all the Info regarding your favourite Crypto Currency
          </Typography>
        </div>
      </Container>
    </div>
  )
}

export default Banner
