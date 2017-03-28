import React from 'react';
import '../styles/index.scss';

var TodoApp =  new React.createClass({
  getInitialState() {
    return {
      items: [],
      text: ''
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    const id = this.state.items.length + 1
    const text = this.state.text;
    var prevS = this.state;
    //this.setState({items: prevS.concat(obj)})
    this.setState( (prevState) => ({
      items: prevState.items.concat({id: id, text: text}),
      text: ''
    }));
  console.log(this.state);
  },

  handleChange(e) {
    this.setState({text: e.target.value });
    //console.log(this.state.text);
  },

  render() {
    return (
      <div>
        <h1>Hello Trendantenna!</h1>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <button>Add Item </button>
        </form> 
      </div>
    )
  }
});

var TodoList = new React.createClass( {
  render() {
    return (
      <ul>
          {this.props.items.map( (item) => (
            <li key={item.id}> { item.text }</li> )
          )}
        </ul>
    )
  }
})

export default TodoApp;