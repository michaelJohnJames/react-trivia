import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { New } from './New';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<New />, document.getElementById('bottom'));

registerServiceWorker();
