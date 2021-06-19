import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename="https://jungchaeyeon.github.io/land">
  <App />
</BrowserRouter>,
  document.getElementById('root')
);

//reportWebVitals();
serviceWorker.unregister();