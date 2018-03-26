import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from './Container';
import {Button} from 'react-bootstrap';

export class Wrong extends React.Component {
  constructor(props) {
    super(props);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    ReactDOM.render(<Container />, document.getElementById('container'))
  }



  render() {
    return (
      <div>
      <h1>Sorry, you are incorrect!</h1>
      <h4>The correct answer was {this.props.correctAnswer}</h4>
      <Button bsStyle="danger" bsSize="large" onClick={this.nextQuestion}>Next question</Button>
      </div>
    )
  }

}
