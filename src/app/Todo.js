import React, { Component } from 'react';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '',
    }
  }

  handleChange(e) {
    const { value } = e.target
    this.setState({ newTodo: value })
  }

  handleClick(e) {
    console.log('oi')
    e.preventDefault();
    const todos = [ ...this.state.todos, this.state.newTodo ];
    this.setState({ todos, newTodo: '' })
  }

  render() {
    return (
      <div>
        <form>
          <input value={this.state.newTodo} onChange={this.handleChange.bind(this)} type="text" placeholder="new todo"/>
          <button onClick={this.handleClick.bind(this)}>create</button>
        </form>
        <ul>
          {this.state.todos.map((todo, idx) => <li key={idx}>{todo}</li>)}
        </ul>
      </div>
    );
  }
}
