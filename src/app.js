import React from 'react'
import '../styles/index.scss'
import TodoList from './todolist'
import CompletedList from './completedlist'

const TodoApp =  new React.createClass({
  getInitialState() {
    return {
      items: [],
      text: '',
      completed: []
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    const id = this.state.items.length + 1
    const text = this.state.text
    var prevS = this.state
    this.setState( (prevState) => ({
      items: prevState.items.concat({id: id, text: text}),
      text: ''
    }))
  },

  handleChange(e) {
    this.setState({text: e.target.value })
  },

  handleCompleted(item) {
    var currentItems = this.state.items
    
    this.state.items.forEach( (it, index) => {
      if(item.id == it.id){
        const completed = currentItems.splice(index, 1)
        this.setState({ items: currentItems, completed: this.state.completed.concat(completed)})
      }       
    })
  },

  render() {
    return (
      <div>
        <h1>Hello Trendantenna!</h1>
        <TodoList items={this.state.items} handleCompleted={this.handleCompleted}/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <button>Add Item </button>
        </form> 
        <div>
          <CompletedList completed={this.state.completed}/> 
        </div> 
      </div>
    )
  }
})

export default TodoApp