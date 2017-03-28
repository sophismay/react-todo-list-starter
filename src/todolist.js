import React from 'react'

const TodoList = new React.createClass( {
  handleCompleted(e) {
    let newItem = undefined;
    this.props.items.forEach( item => { 
      if(item.id.toString() == e.target.name.toString())
        newItem = item
    })
    this.props.handleCompleted(newItem)
  },

  render() {
    return (
      <ul>
          {this.props.items.map( (item) => (
            <li key={item.id}>
            <input type="checkbox" key={item.id} name={item.id} value={item.text} 
              onChange={this.handleCompleted}/>
            { item.text }
            </li>
            )
          )}
        </ul>
    )
  }
})

export default TodoList