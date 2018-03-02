import React from 'react';
import ReactDOM from 'react-dom';
import {Answer} from './Answer';


export class Timer extends React.Component {



  render() {
    return(
      <div>
      <h3>Time left:</h3>
      <h2 id="timer"></h2>
      </div>
    )
  }
}
