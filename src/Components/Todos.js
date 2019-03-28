import React, { Component } from "react";
import { deleteTodo, checkTodo, editTodo } from "../Actions/actions";
import { connect } from "react-redux";

class Todo extends Component {
  render() {
    let filteredState = { filter: "", todoArray: [] };

    if (this.props.filter === "SHOW_ACTIVE") {
      filteredState.todoArray = this.props.tasks.filter(
        item => !item.iscompleted
      );
    }

    if (this.props.filter === "SHOW_COMPLETED") {
      filteredState.todoArray = this.props.tasks.filter(
        state => state.iscompleted
      );
    }

    if (this.props.filter === "SHOW_ALL" || this.props.filter === "") {
      filteredState.todoArray = this.props.tasks;
    }

    const todos = filteredState.todoArray;

    const TodoList = todos.length ? (
      todos.map((todo, i) => {
        return (
          <div className="todolist" key={i}>
            <span>
              {todo.iscompleted ? (
                <input
                  className="status"
                  onChange={() => {
                    this.props.check(i);
                  }}
                  checked={true}
                  type="checkbox"
                />
              ) : (
                <input
                  className="status"
                  type="checkbox"
                  onChange={() => {
                    this.props.check(i);
                  }}
                  checked={false}
                />
              )}
            </span>
            {todo.iscompleted ? (
              <input
                onChange={() => {}}
                className="listitem strike"
                value={todo.todocaption}
                disabled={true}
              />
            ) : (
              <input
                className="listitem"
                value={todo.todocaption}
                onChange={e => {
                  this.props.edit(e, i);
                }}
              />
            )}
            <span
              className="cross"
              onClick={() => {
                this.props.delete(i);
              }}
            >
              X
            </span>
          </div>
        );
      })
    ) : (
      <p className="listitem">NO Left TODO</p>
    );
    return <div>{TodoList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.todoArray,
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    check: i => {
      dispatch(checkTodo(i));
    },

    edit: (e, i) => {
      dispatch(editTodo(i, e.target.value));
    },

    delete: i => {
      dispatch(deleteTodo(i));
    }
  };
};

const Todos = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default Todos;
