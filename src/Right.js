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
  ReactDOM.render(<Container score={this.props.score} />, document.getElementById('container'))
}

addToNum() {
  this.setState({numRight: this.state.numRight + 1})
}



  render() {
    return (
      <div class="card" class="bg-light">
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
