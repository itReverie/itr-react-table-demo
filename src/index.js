import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/highlight.js/styles/atom-one-dark.css';
import Routes from './routes';

ReactDOM.render(
  (<Routes />),
  document.getElementById('root'));
registerServiceWorker();
