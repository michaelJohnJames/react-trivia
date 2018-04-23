import './index.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Trivia } from './Trivia';
import { Container } from './Container';
import { Header } from './Header';
import { Welcome } from './Welcome';

import registerServiceWorker from './registerServiceWorker';




//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Header  />, document.getElementById('header'));
//ReactDOM.render(<Container />, document.getElementById('container'));
ReactDOM.render(<Welcome  />, document.getElementById('container'));


registerServiceWorker();
