import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from './Container';
import {Button} from 'react-bootstrap';
import {Trivia} from './Trivia';
import {Header} from './Header';
import {Welcome} from './Welcome';


export class Right extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numRight: 1 }
    this.nextQuestion = this.nextQuestion.bind(this);
  }

componentDidMount() {
  this.props.handleHelper

}

nextQuestion() {
  console.log("worked")
  ReactDOM.render(<Container />, document.getElementById('container'))
}

// handleHelper() {
//   this.props.onScoreChange(this.props.score + 1)
// }





  render() {

    return (
      <div className="right-wrong">
        <br></br>
        <br></br>
        <h2>You are correct!</h2>
        <p>{this.props.score}</p>
        <br></br>
        <br></br>
        <Button bsStyle="success" bsSize="large" onClick={this.nextQuestion}>Next question</Button>
        <br></br>
        <br></br>
      </div>
)
  }
}
