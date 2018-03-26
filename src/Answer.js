import React from 'react';
import {Trivia} from './Trivia';
import {Timer} from './Timer';
import {btnStyles } from './index.css';
import {Right} from './Right';
import {Wrong} from './Wrong';
import {Timeout} from './Timeout.js';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';

//var t = setInterval(function() {
  //const timer = document.getElementById('timer');
  //var x = 10
  //var x = timer.textContent;

  //timer.textContent = x - 1;
  //console.log(x)
  //if (timer.textContent == -10) {
  //  clearInterval(t);
  //}
  //}, 1000)


export class Answer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      timerStart: 10,
      time: setInterval(function () {
        let x = 10;
        x = x--;
        console.log(x);
      }, 1000)

    }


    this.answersMapped = this.answersMapped.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    //this.stopTimer = this.stopTimer.bind(this);
    //this.countDown = this.countDown.bind(this);
    setTimeout(this.answersMapped, 2000);
    //setTimeout(this.countDown, 2000);

  }


  answersMapped() {
    // const timer = document.getElementById('timer');
    const array = this.props.wrongAnswers[0];
    const ans = document.getElementById('ans');
    array.push(this.props.correctAnswer[0]);
    array.sort();
    console.log(array);
    for (let i = 0; i < array.length; i++) {
    ans.innerHTML += "<button> " + array[i] + "</button> <br/> <br/>"
  }
    //this.countDown();
  }


// countDown() {
//
//     //console.log(t);
//     this.setState({time: 10})
//     const correct = this.props.correctAnswer[0]
//     const timer = document.getElementById('timer');
//     var x = 10;
//     timer.textContent = this.state.time;
//     var x = timer.textContent;
//     console.log(x)
//     const t = setInterval(function () {
//       var x = timer.textContent;
//      timer.textContent = x - 1;
//       if (timer.textContent == 0) {
//        clearInterval(t);
//        ReactDOM.render(<Timeout correctAnswer={correct} />, document.getElementById('container'))
//    }
//   }, 1000)
//
//   }


  // time() {
  //   var x = 10;
  //   const timer = document.getElementById('timer');
  //   timer.textContent = 10;
  //    timer.textContent = x - 1;
  //     if (timer.textContent == 0) {
  //       //ReactDOM.render(<Timeout correctAnswer={correct} />, document.getElementById('container'))
  //     }
  // }


  componentWillUnmount(t) {
    console.log(t)
    window.clearInterval(t);
  }





  checkAnswer(e) {
    const ans = document.getElementById('ans')
    const timer = document.getElementById('timer');
    clearInterval(this.state.time);
    if (e.target.textContent === this.props.correctAnswer[0]) {
      ReactDOM.render(<Right />, document.getElementById('container'))
    } else {
            ReactDOM.render(<Wrong correctAnswer={this.props.correctAnswer[0]} />, document.getElementById('container'))
    }
  }



  render() {
    //const array = this.props.wrongAnswers[0];
    //const ans = document.getElementById('ans');
    return (
    <div>
      <div id="ans" onClick={this.checkAnswer}>
      </div>
      <br/>

    </div>
    )
  }
}
