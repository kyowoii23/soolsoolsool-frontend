import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './components/common/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
);

