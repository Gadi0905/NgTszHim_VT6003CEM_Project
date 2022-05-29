// react
import React from 'react';
// ReactDOM
import ReactDOM from "react-dom/client";
// index css
import './index.css';
// app
import App from './App';
// css
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
/**
 * render app
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
