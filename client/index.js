import { BrowserRouter } from 'react-router-dom';

import React from "react"
import { render } from 'react-dom';
import App from './App';
import { Router } from 'react-router';

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('app'),
);

