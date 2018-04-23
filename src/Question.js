import React from 'react';



export class Question extends React.Component {



  render() {
    return (
      <div>
        <h3><strong>{this.props.categories[0]}</strong></h3>
        <br/>
        <h5><strong>{this.props.questions[0]}</strong></h5>
      </div>
    )
  }
}
