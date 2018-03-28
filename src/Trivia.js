import React from 'react';
import ReactDOM from 'react-dom';
import {Question} from './Question';
import {Answer} from './Answer';
import {Header} from './Header';
import Bootstrap from 'react-bootstrap';



export class Trivia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      questions: [],
      correctAnswer: [],
      wrongAnswers: [],
      //score: 0
    }
    this.handleHelper = this.handleHelper.bind(this)
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
      console.log(info);
      info.map((x) =>


      { this.setState({})
        categories.push(x.category.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&shy;/g, "-").replace(/&#039;/g, "'").replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"'))
        questions.push(x.question.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&shy;/g, "-").replace(/&#039;/g, "'").replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"'))
        answers.push(x.correct_answer.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&shy;/g, "-").replace(/&#039;/g, "'").replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"'))
        wrongAnswers.push(x.incorrect_answers)
        }
      )
    })







    this.setState({categories: categories});
    this.setState({questions: questions});
    this.setState({correctAnswer: answers });
    this.setState({wrongAnswers: wrongAnswers});

  }

   handleHelper(score) {
     //this.setState({score})
      this.props.onScoreChange(this.props.score + 1)
   }






render() {

  return (

    <div bsStyle="card" className="bg-light">
    <br></br>
      <Question categories={this.state.categories} questions={this.state.questions} />
    <br></br>
      <Answer score={this.props.score} onScoreChange={this.handleHelper}  correctAnswer={this.state.correctAnswer} wrongAnswers={this.state.wrongAnswers} />
    </div>
)
}
}

//ReactDOM.render(<Trivia />, document.getElementById('bottom'))
