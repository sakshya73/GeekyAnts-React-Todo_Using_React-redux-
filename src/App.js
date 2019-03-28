import React, { Component } from "react";
import FormList from "./Components/Form";
import Todos from "./Components/Todos";
import FilterList from "./Filters/Filter";
import { connect } from "react-redux";

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="mainhead"> Todos</h1>
        <FormList />
        <Todos />
        <div className="container mydiv">
          {this.props.tasks.length ? (
            <FilterList style={"inline"} />
          ) : (
            <FilterList style={"none"} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.todoArray
  };
};

const App = connect(mapStateToProps)(TodoApp);

export default App;
