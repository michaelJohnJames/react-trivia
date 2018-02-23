import React from 'react';
import ReactDOM from 'react-dom';


export class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }



  componentWillMount() {
    //const questions = [];
  fetch('https://opentdb.com/api.php?amount=10')
    .then(response => response.json())
    .then(data => data.reponse.map((questions) => {
        return(
          <div key={questions.results}>
          <p>{questions[0].question}</p>
          </div>
        )
      })

    this.setState({categories: categories});
    console.log(this.state.categories)
  })}



  render() {
    return (


        <div> {this.state.categories} </div>

    )
  }


}

ReactDOM.render(<New />, document.getElementById('bottom'));
