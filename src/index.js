import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppProvider from "./context"


ReactDOM.render(
  // We wrapped our App component with AppProvider 
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);


