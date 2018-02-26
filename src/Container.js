import React from 'react';
import ReactDOM from 'react-dom';
import {Trivia} from './Trivia';
import {Question} from './Question';
import {Answer} from './Answer'


export class Container extends React.Component {

render() {
  return (
    <div style={{backgroundColor: 'yellow', width: 1000, height: 700, zIndex: 1, backgroundRadius: 75 }}>
      <Trivia />

    </div>
  )
}

}

//ReactDOM.render(<Container />, document.getElementById('container'))
