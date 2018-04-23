import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from './Container';
import {Header} from './Header';
import {Button} from 'react-bootstrap';

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      start: false
    }
    this.handleScoreChange = this.handleScoreChange.bind(this)
    this.newGame = this.newGame.bind(this)
  }

  handleScoreChange(score) {
    this.setState({score})
  }


  newGame() {
    ReactDOM.render(<Header score={this.state.score} onScoreChange={this.handleScoreChange}  />, document.getElementById('header'))

    this.setState({start: true})
    //return(
    //  <Header score={this.state.score} onScoreChange={this.handleScoreChange}  />, document.getElementById('header'))
    //  <Container score={this.state.score} onScoreChange={this.handleScoreChange} />, document.getElementById('container'))
    //)
    //ReactDOM.render(<Container score={this.state.score} onScoreChange={this.handleScoreChange} />, document.getElementById('container'))
  }


  render() {
    const score = this.state.score
    if (this.state.start == false) {
    return(
      <div id="welcome">
      <div id="title">
        <h2>Welcome to</h2>
        <h1>What Do You Know?</h1>
        </div>
      <br/>
      <br/>
        <p>You will be asked random questions. See how many you can get right.</p>
      <br/>
        <Button bsStyle="success" bsSize="large" onClick={this.newGame}>Start</Button>
      </div>
    )
  } else {
    return(
    <div>
        <Container score={this.state.score} onScoreChange={this.handleScoreChange} />
    </div>
  )
  }
  }
}
