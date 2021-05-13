import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Actions from './data/Actions';

Actions.addPerson("Rigby");
Actions.addPerson("Penny");
Actions.addPerson("Joey");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




