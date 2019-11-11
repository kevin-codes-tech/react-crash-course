import React, { Component } from 'react';
import PropTypes from 'prop-types';

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  cursor: 'pointer',
  float: 'right'
};

export class TodoItem extends Component {
  render() {
    const { id, title } = this.props.todoItem;
    return (
      <p style={this.getStyle()}>
        <span>
          <input
            type="checkbox"
            checked={this.props.todoItem.completed}
            onChange={this.props.markComplete.bind(this, id)}
          />
        </span>{' '}
        {title}{' '}
        <span>
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={btnStyle}
          >
            X
          </button>
        </span>
      </p>
    );
  }

  getStyle = () => {
    return {
      textDecoration: this.props.todoItem.completed ? 'line-through' : 'none'
    };
  };
}

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoItem;
