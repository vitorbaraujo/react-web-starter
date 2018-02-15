import React, { Component } from 'react';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    }
  }

  handleClick(e) {
    e.preventDefault();
    const todos = [ ...this.state.todos, this.input.value ];
    this.input.value = '';
    this.setState({ todos })
  }

  removeTodo(idx) {
    const todos = [...this.state.todos.slice(0, idx), ...this.state.todos.slice(idx + 1)]
    this.setState({ todos })
  }

  render() {
    return (
      <div>
        <form>
          <input ref={node => this.input = node} type="text" placeholder="new todo"/>
          <button onClick={this.handleClick.bind(this)}>create</button>
        </form>
        <ul>
          {this.state.todos.map((todo, idx) => (
            <li key={idx} onClick={() => this.removeTodo.call(this, idx)}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}
