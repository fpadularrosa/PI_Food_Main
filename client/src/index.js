import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import axios from 'axios';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import dotenv from 'dotenv';
dotenv.config();

axios.defaults.baseURL = 'http://localhost:3001';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
