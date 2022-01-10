import React from 'react';
import ReactDOM from 'react-dom';
import App from './Pages/App';
import './Styles/normilize.css'
import './Styles/Index.css'
import StyledMain from './Styles/Index.js'
ReactDOM.render(
  <React.StrictMode>
    <StyledMain>
    <App />      
    </StyledMain>
  </React.StrictMode>,
  document.getElementById('root')
);

