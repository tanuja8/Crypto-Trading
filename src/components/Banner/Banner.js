import { Container, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles=makeStyles(() =>({
   banner:{
    background:"url(./banner.jpg)",
   } ,
   bannerContent:{
    height :400,
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
        <div className='classes.tagline'> */last line*/

        </div>
      </Container>
    </div>
  )
}

export default Banner
