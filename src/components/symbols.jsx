import React, { Component } from "react";

class Symbols extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.onClick(this.props.trade)}>
          {this.props.trade.Name}
        </button>
      </React.Fragment>
    );
  }
}

export default Symbols;
