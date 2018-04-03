import React from 'react';
import ReactDOM from 'react-dom';
import {Trivia} from './Trivia';
import {Question} from './Question';
import {Answer} from './Answer';
import {Header} from './Header';
import Bootstrap from 'react-bootstrap';


export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    }
    this.handleHelper = this.handleHelper.bind(this)
  }

  handleHelper(score) {
    //this.setState({score})
    this.props.onScoreChange(this.props.score + 1)
  }



render() {

  return (
    <div>
      <Trivia score={this.props.score} onScoreChange={this.handleHelper} />


    </div>
  )
}



}



//ReactDOM.render(<Trivia />, document.getElementById('container'));
// ReactDOM.render(<Header score={this.state.score} onScoreChange={this.handleScoreChange}  />, document.getElementById('header'));
