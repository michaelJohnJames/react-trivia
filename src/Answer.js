import React from 'react';


export class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.answersMapped = this.answersMapped.bind(this);
  }

  answersMapped() {
    const array = this.props.wrongAnswers[8]
    var ans = document.getElementById('ans')
  for (let i = 0; i < array.length; i++) {
    ans.innerHTML += "<h4>" + array[i] + "</h4>"
  }
  }

  render() {
    return (
    <div>
      <h4>Correct: {this.props.correctAnswer[8]}</h4>
      <h4 id="ans" onLoad={this.answersMapped} ></h4>
      <button onClick={this.answersMapped}>Click for Wrong answers</button>
    </div>
    )
  }
}
