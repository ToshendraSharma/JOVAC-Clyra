import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '../App.jsx'; 

import '../index.css'; 


const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
} else {
 
    console.error("Critical Error: Cannot find HTML element with ID 'root'. The application cannot render.");
}