import React, { Component } from "react";
import { showAll, showActive, showCompleted } from "../Actions/actions";
import { connect } from "react-redux";
class Filter extends Component {
  render() {
    return (
      <div className="filter " style={{ display: this.props.style }}>
        <button className="showAll mybtn " onClick={this.props.showAll}>
          All
        </button>
        <button className="showActive mybtn" onClick={this.props.showActive}>
          Active
        </button>
        <button
          className="showCompleted mybtn"
          onClick={this.props.showCompleted}
        >
          Completed
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  showAll: () => dispatch(showAll()),
  showActive: () => dispatch(showActive()),
  showCompleted: () => dispatch(showCompleted())
});

const FilterList = connect(
  null,
  mapDispatchToProps
)(Filter);
export default FilterList;
