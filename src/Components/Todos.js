import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import "./Todos.css";

class Todos extends Component {
  render() {
    return (
      <ul className={"todo-list"}>
        {this.props.todos.map(todo => (
          <li key={todo.id} className={"todo-card"}>
            <TodoItem
              todoItem={todo}
              markComplete={this.props.markComplete}
              deleteTodo={this.props.deleteTodo}
            />
          </li>
        ))}
      </ul>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default Todos;
