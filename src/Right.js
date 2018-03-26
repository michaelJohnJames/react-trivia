import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from './Container';
import {Button} from 'react-bootstrap';


export class Right extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numRight: 1 }
    this.addToNum = this.addToNum.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

componentWillMount() {
  this.setState({umRight: this.state.numRight + 1})

}

nextQuestion() {
  ReactDOM.render(<Container />, document.getElementById('container'))
}

addToNum() {
  this.setState({numRight: this.state.numRight + 1})
}



  render() {
    return (
      <div>
      <h1>You are correct!</h1>
      <p>You have answered {this.state.numRight} correctly!</p>
      <Button bsStyle="success" bsSize="large" onClick={this.nextQuestion}>Next question</Button>
      </div>
    )
  }
}
