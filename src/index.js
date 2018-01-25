import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/highlight.js/styles/atom-one-dark.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
