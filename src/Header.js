import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {


  render() {
    return(
      <div>
        <div>
          <h1>React Trivia</h1>
        </div>
        <div>
          <h3>Your Score: <b>0</b></h3>
        </div>

      </div>

    )
  }

}

ReactDOM.render(<Header />, document.getElementById('header'))
