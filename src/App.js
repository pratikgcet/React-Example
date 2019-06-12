import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Symbols from "./components/symbols";
import Timeseries from "./components/timeseries";

class App extends Component {
  constructor() {
    super();
    const prices = [
      { Name: "Apple", Id: 1 },
      { Name: "Vodafone", Id: 2 },
      { Name: "Bt", Id: 3 }
    ];
    var trades = [];
    this.state = { prices, trades };
  }

  handleSymbolsClick = trade => {
    const trades = [...this.state.trades];
    trades.push(trade);
    this.setState({ trades });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.prices.map(price => (
            <Symbols
              key={price.Name}
              trade={price}
              onClick={this.handleSymbolsClick}
            />
          ))}
        </div>
        <div>
          {this.state.trades.map(trade => (
            <Timeseries key={trade.Id} row={trade} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
