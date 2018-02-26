import React from 'react';
import {Trivia} from './Trivia';
import {Timer} from './Timer';


export class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.answersMapped = this.answersMapped.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.countDown = this.countDown.bind(this);
    setTimeout(this.answersMapped, 3000);
  }



  answersMapped() {
    const timer = document.getElementById('timer');
    const array = this.props.wrongAnswers[0];
    const ans = document.getElementById('ans');
    ans.innerHTML += "<button className={answer}>" + this.props.correctAnswer[0] + "</button> <br/>";
    for (let i = 0; i < array.length; i++) {
    ans.innerHTML += "<button className={answer}>" + array[i] + "</button> <br/>"
    }
    this.countDown();
  }


countDown() {
    const timer = document.getElementById('timer');
    var x = 10;
    timer.textContent = x;
     var t = setInterval(function() {
     var x = timer.textContent;
     timer.textContent = x - 1;
      if (timer.textContent == 0) {
        alert("Sorry, you are out of time!");
        clearInterval(t);
      }
    }, 1000);
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
      <br/>
      <Timer />
    </div>
    )
  }
}
