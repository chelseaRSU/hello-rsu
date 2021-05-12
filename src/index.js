import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Actions from './data/Actions';

Actions.addPerson("Seymour Butts");
Actions.addPerson("Amanda Huggenkiss");
Actions.addPerson("I.P. Freeley");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




