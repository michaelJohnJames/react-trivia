import React from 'react';



export class Question extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.categories[0]}</h1>
        <h3>{this.props.questions[0]}</h3>
      </div>
    )
  }
}
