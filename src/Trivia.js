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
      console.log(info);
      info.map((x) =>


      { this.setState({})
        categories.push(x.category)
        questions.push(x.question.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&shy;/g, "-").replace(/&#039;/g, "'").replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"'))
        answers.push(x.correct_answer)
        wrongAnswers.push(x.incorrect_answers)
        }
      )
    })

    function htmlspecialchars_decode(text)
    {
       var replacements = Array("&", "<", ">", '"', "'");
       var chars = Array("&amp;", "&lt;", "&gt;", "&quot;", "'");
       for (var i=0; i<chars.length; i++)
       {
           var re = new RegExp(chars[i], "gi");
           if(re.test(text))
           {
               text = text.replace(re, replacements[i]);
           }
       }
       return text;
    }

    //var escapedString = string.replace(/'/g, "&apos;").replace(/"/g, "&quot;")


    this.setState({categories: categories});
    this.setState({questions: questions});
    this.setState({correctAnswer: answers });
    this.setState({wrongAnswers: wrongAnswers});

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
