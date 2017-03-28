import React from 'react';
import '../styles/index.scss';

var TodoApp =  new React.createClass({
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
        <TodoList items={this.state.items} handleCompleted= {this.handleCompleted}/>
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
});

var TodoList = new React.createClass( {
  handleCompleted(e) {
    console.log('key ', e.target.name)
    let newItem = undefined;
    //const newItems = this.props.items.map( item => if(item.id == e.target.key) item)
    this.props.items.forEach( item => { 
      if(item.id.toString() == e.target.name.toString())
        newItem = item
    })
    //const newItem = newItems[0]
    //this.props.handleCompleted(newItem)
    console.log('outside', newItem);

    this.props.handleCompleted(newItem)
  },

  render() {
    return (
      <ul>
          {this.props.items.map( (item) => (
            /*<li key={item.id}> { item.text }</li> */
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

var CompletedList = new React.createClass( {
  render() {
    return (
      <ul>
        { this.props.completed.map ( item => (<li key={item.id}>{item.text}</li>)) }
      </ul>
    )
  }
});

export default TodoApp;