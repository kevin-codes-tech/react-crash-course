import React, { Component } from 'react';
import Todos from './Components/Todos';
import Header from './Components/layout/header';
import AddTodo from './Components/addTodo';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './Components/Pages/about';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(responseData => {
        return responseData.json();
      })
      .then(response => {
        this.setState({ todos: response });
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header></Header>
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo}></AddTodo>
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }

  addTodo = title => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        completed: false
      })
    })
      .then(responseData => {
        return responseData.json();
      })
      .then(response => {
        this.setState({ todos: [...this.state.todos, response] });
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
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE'
    })
      .then(responseData => {
        return responseData.json();
      })
      .then(response => {
        this.setState({
          todos: this.state.todos.filter(todo => todo.id !== id)
        });
      });
  };
}

export default App;
