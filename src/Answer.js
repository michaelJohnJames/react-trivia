import React from 'react';
import {Trivia} from './Trivia';


export class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.answersMapped = this.answersMapped.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.timedOut = this.timedOut.bind(this);
  }



  answersMapped() {
    const timer = document.getElementById('timer');
    const array = this.props.wrongAnswers[0];
    const ans = document.getElementById('ans');
    ans.innerHTML += "<h4>" + this.props.correctAnswer[0] + "</h4>";
    for (let i = 0; i < array.length; i++) {
    ans.innerHTML += "<h4>" + array[i] + "</h4>"
    var x = 10;
    timer.innerHTML = x;

  }
  setInterval(this.countDown, 1000);
  setInterval(this.timedOut, 10000);
}

  countDown() {
    const timer = document.getElementById('timer');
    var x = timer.textContent;
    timer.innerHTML = x - 1
    if (timer.textContent === 0 ) {
      alert("Sorry, you've run out of time!")
    }
  }

  timedOut() {
    console.log('out of time')
  }

  checkAnswer(e) {
    if (e.target.textContent === this.props.correctAnswer[0]) {
      alert("You are correct")

    } else {
      alert("Sorry you are wrong, the answer is " +  this.props.correctAnswer[0])
    }
  }



  render() {
    const array = this.props.wrongAnswers[0];
    const ans = document.getElementById('ans');
    return (
    <div>
      <h4 id="ans" onClick={this.checkAnswer}></h4>
      <button id="ans-btn" onClick={this.answersMapped}>See answers</button>
      <br/>
      <br/>
      <h3>Time left:</h3>
      <h2 id="timer"></h2>
    </div>
    )
  }
}
