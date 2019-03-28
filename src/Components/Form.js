import React, { Component } from "react";
import { addTodo } from "../Actions/actions";
import { connect } from "react-redux";

class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <input
            placeholder="What needs to be added?"
            className="task"
            type="text"
            id="todocaption"
          />
          <button className="submitbutton">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: e => {
    e.preventDefault();
    dispatch(addTodo(e.target[0].value));
    e.target[0].value = "";
  }
});

const FormList = connect(
  null,
  mapDispatchToProps
)(Form);

export default FormList;
