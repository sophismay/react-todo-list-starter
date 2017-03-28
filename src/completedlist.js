import React from 'react'

const CompletedList = new React.createClass( {
  render() {
    return (
      <ul>
        { this.props.completed.map( item => (<li key={item.id}>{item.text}</li>)) }
      </ul>
    )
  }
})

export default CompletedList