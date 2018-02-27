import React from 'react';
import {Trivia} from './Trivia';
import {Timer} from './Timer';
import {btnStyles } from './index.css'


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
    ans.innerHTML += "<button style={btnStyles} className={answer}>" + this.props.correctAnswer[0] + "</button> <br/> <br/>";
    for (let i = 0; i < array.length; i++) {
    ans.innerHTML += "<button className={answer}>" + array[i] + "</button> <br/> <br/>"
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
        console.log("Sorry, you are out of time!");
        clearInterval(t);
      }
    }, 1000);
  }



  checkAnswer(e) {
    const btns = document.querySelectorAll('button')
    console.log(e.target.innerHTML);
    if (e.target.textContent === this.props.correctAnswer[0]) {
      console.log("You are correct")

    } else {
      console.log("Sorry you are wrong, the answer is " +  this.props.correctAnswer[0])
    }
  }



  render() {
    const array = this.props.wrongAnswers[0];
    const ans = document.getElementById('ans');
    return (
    <div>
      <div id="ans" onClick={this.checkAnswer}>
      </div>
      <br/>
      <Timer />
    </div>
    )
  }
}
