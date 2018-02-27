import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from './Container';

export class Right extends React.Component {

nextQuestion() {
  ReactDOM.render(<Container />, document.getElementById('container'))
}



  render() {
    return (
      <div>
      <h1>You are correct!</h1>
      <button onClick={this.nextQuestion}>Next question</button>
      </div>
    )
  }
}
