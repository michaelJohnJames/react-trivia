import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from './Container';
import {Button} from 'react-bootstrap';

export class Welcome extends React.Component {



  newGame() {
    ReactDOM.render(<Container />, document.getElementById('container'))
  }


  render() {
    return(
      <div>
        <h1>Welcome to What Do You Know?</h1>
        <p>You will be asked random questions. See how many you can get right.</p>
        <Button bsStyle="success" bsSize="large" onClick={this.newGame}>Play a new game</Button>
      </div>
    )
  }
}
