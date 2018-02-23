import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Trivia } from './Trivia';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Trivia />, document.getElementById('bottom'));

registerServiceWorker();
