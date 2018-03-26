import React from 'react';
import ReactDOM from 'react-dom';
import {Trivia} from './Trivia';
import {Question} from './Question';
import {Answer} from './Answer';
import Bootstrap from 'react-bootstrap';


export class Container extends React.Component {

render() {
  return (
    <div class="card">
      <Trivia />

    </div>
  )
}

}


//ReactDOM.render(<Container />, document.getElementById('container'))
