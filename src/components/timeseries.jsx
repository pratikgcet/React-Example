import React, { Component } from "react";

class Timeseries extends Component {
  render() {
    return (
      <div>
        <div>{this.props.row.Name}</div>
      </div>
    );
  }
}

export default Timeseries;
