import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './modules/timer';
import './modules/calc';
import './modules/modal';
import './modules/sendForm';
import './modules/slider';
import './modules/tabs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


