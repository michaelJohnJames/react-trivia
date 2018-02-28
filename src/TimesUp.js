import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from './Container';

export class TimesUp extends React.Component {

  nextQuestion() {
    ReactDOM.render(<Container />, document.getElementById('container'))
  }

render() {
  return (
    <div>
    <h1>Sorry, you ran out of time!</h1>
    <h4>The correct answer was {this.props.correctAnswer}</h4>
    <button onClick={this.nextQuestion}>Next question</button>
    </div>
  )
}


}
