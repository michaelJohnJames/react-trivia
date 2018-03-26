import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Trivia } from './Trivia';
import { Container } from './Container';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Container />, document.getElementById('container'))
//ReactDOM.render(<Trivia />, document.getElementById('bottom'));

registerServiceWorker();
