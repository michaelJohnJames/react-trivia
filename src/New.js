import React from 'react';
import ReactDOM from 'react-dom';


export class New extends React.Component {
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
    const wrongAnswers = []
  fetch('https://opentdb.com/api.php?amount=10')
    .then(response => response.json())
    .then(data => {
      let info = data.results;
      info.map((x) =>
        //console.log(question.category)
        //question.category;
      { categories.push(x.category)
        questions.push(x.question)
        answers.push(x.correct_answer)
        wrongAnswers.push(x.incorrect_answers)
        }
      )
    })

      //data.response.map(data => data.results))
    this.setState({categories: categories});
    this.setState({questions: questions});
    this.setState({correctAnswer: answers })
    this.setState({wrongAnswers: wrongAnswers})
    //console.log(this.state.categories)
  }



  render() {
    return (
        <div>
          {this.state.categories[0]}
        </div>
    )
  }


}

//ReactDOM.render(<New />, document.getElementById('bottom'));
