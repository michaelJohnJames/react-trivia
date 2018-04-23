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
      <div className="right-wrong">
        <br></br>
        <br></br>
      <h2>Sorry, you are incorrect!</h2>
      <h4>The correct answer was </h4>
      <h4>{this.props.correctAnswer}</h4>
        <br></br>
        <br></br>
      <Button bsStyle="danger" bsSize="large" onClick={this.nextQuestion}>Next question</Button>
        <br></br>
        <br></br>
      </div>
    )
  }

}
