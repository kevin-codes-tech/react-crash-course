import React, { Component } from "react";
import Todos from "./Components/Todos";
import Header from "./Components/layout/header";
import AddTodo from "./Components/addTodo";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Finish Crash Course",
        completed: false
      },
      {
        id: 2,
        title: "Master React",
        completed: true
      },
      {
        id: 3,
        title: "Finish Vue Crash Course",
        completed: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header></Header>
          <AddTodo addTodo={this.addTodo}></AddTodo>
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }

  addTodo = title => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };
}

export default App;
