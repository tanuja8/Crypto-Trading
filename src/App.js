
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepages from './pages/Homepages';
import Coinpage from './pages/Coinpage';
import { color, makeStyles } from '@material-ui/core';

function App() {
  const useStyles = makeStyles(()=>({
    App:{
      backgroundColor:"#14161a",
      color:"gold",
      minHeight:"100vh",
    },
  }));
  const classes =useStyles();
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Routes>
      {/* <Route path="/" exact element={Homepages}/> */}
      <Route path="/" exact element={<Homepages/>}/>
      <Route path="/coins/:id" element={<Coinpage/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
