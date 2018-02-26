import React from 'react';
import ReactDOM from 'react-dom';


export class Trivia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      questions: [],
      correctAnswer: [],
      wrongAnswers: []
    }
    this.answersMapped = this.answersMapped.bind(this);
  }


  componentWillMount() {
    const questions = [];
    const categories = [];
    const answers = [];
    const wrongAnswers = [];
  fetch('https://opentdb.com/api.php?amount=10')
    .then(response => response.json())
    .then(data => {
      let info = data.results;
      info.map((x) =>

      { this.setState({})
        categories.push(x.category)
        questions.push(x.question)
        answers.push(x.correct_answer)
        wrongAnswers.push(x.incorrect_answers)
        }
      )
    })
    this.setState({categories: categories});
    this.setState({questions: questions});
    this.setState({correctAnswer: answers });
    this.setState({wrongAnswers: wrongAnswers});
    console.log(categories);


  }

  answersMapped() {
    const array = this.state.wrongAnswers[8]
    var ans = document.getElementById('ans')
  for (let i = 0; i < array.length; i++) {
    ans.innerHTML += "<h4>" + array[i] + "</h4>"
  }
  }


render() {
  return (
    <div>
      <h1>{this.state.categories[8]}</h1>
      <h3>{this.state.questions[8]}</h3>
      <h4>Correct: {this.state.correctAnswer[8]}</h4>
      <h4 id="ans" onLoad={this.answersMapped} ></h4>
      <button onClick={this.answersMapped}>Click for Wrong answers</button>
      <p></p>
    </div>
)
}
}

//ReactDOM.render(<Trivia />, document.getElementById('bottom'))
