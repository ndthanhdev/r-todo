import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InsertBar from './InsertBar'
import ListTodo from "./ListTodo";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(text) {
    this.setState({
      todos: [...this.state.todos, text]
    });
  }

  render() {    
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div>
        <InsertBar onAddTodo={this.handleAddTodo}></InsertBar>
        <ListTodo todos={this.state.todos}></ListTodo>
      </div>
    );
  }
}

export default App;
