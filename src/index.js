import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import './components/App.module.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
