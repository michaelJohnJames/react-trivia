import React from 'react';



export class Question extends React.Component {



  render() {
    return (
      <div>
        <h2>{this.props.categories[0]}</h2>
        <h3>{this.props.questions[0]}</h3>
      </div>
    )
  }
}
