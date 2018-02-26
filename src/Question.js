import React from 'react';



export class Question extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.categories[8]}</h1>
        <h3>{this.props.questions[8]}</h3>
      </div>
    )
  }
}
