
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepages from './pages/Homepages';
import Coinpage from './pages/Coinpage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      {/* <Route path="/" exact element={Homepages}/> */}
      <Route path="/" exact element={Homepages}/>
      <Route path="/coins/:id" element={Coinpage}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
