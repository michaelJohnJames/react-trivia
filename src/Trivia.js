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
    //this.loopInfo = this.loopInfo.bind(this);
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

        //question.category;
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
    this.setState({correctAnswer: answers })
    this.setState({wrongAnswers: wrongAnswers})
    console.log(categories)
  }

//const cate = for (let i = 0; i < this.state.categories.length; i++) {
//  console.log(this.state.category[i]);
//}


render() {
  return (
    <div>
      <h1>{this.state.categories[8]}</h1>
      <h3>{this.state.questions[8]}</h3>
      <h4>Correct: {this.state.correctAnswer[8]}</h4>
      <h4>{this.state.wrongAnswers[8]}</h4>
    </div>
)
}
}

ReactDOM.render(<Trivia />, document.getElementById('bottom'))
