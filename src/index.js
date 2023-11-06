import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cryptocontex from './Cryptocontex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cryptocontex>
      <App />
      </Cryptocontex>

  </React.StrictMode>
);

