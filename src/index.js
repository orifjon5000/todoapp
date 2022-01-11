import React from 'react';
import ReactDOM from 'react-dom';
import App from './Pages/App';
import './Styles/normilize.css'
import GlobalStyles from './Styles/Index.js'
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />      
  </React.StrictMode>,
  document.getElementById('root')
);

