import React from 'react';
import ReactDOM from 'react-dom';
import {Question} from './Question';
import {Answer} from './Answer';



export class Trivia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      questions: [],
      correctAnswer: [],
      wrongAnswers: []
    }
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




render() {
  return (
    <div>
      <Question categories={this.state.categories} questions={this.state.questions} />
      <Answer correctAnswer={this.state.correctAnswer} wrongAnswers={this.state.wrongAnswers} />
    </div>
)
}
}

//ReactDOM.render(<Trivia />, document.getElementById('bottom'))
