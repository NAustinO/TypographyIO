
import App from './containers/App.jsx';
import React from "react"
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('app'),
);

