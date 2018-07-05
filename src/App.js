import React, { Component } from 'react';
import './App.css';
import RateCard from './components/rate-card/';
import rates from './rates.mock';


class App extends Component {

  state = {
    rates: rates,
    updateInterval: 1000,
  };

  componentDidMount() {
    setInterval(() => this.updateRates(), this.state.updateInterval);
  }

  updateRates() {
    this.setState({
      rates: this.state.rates.map(rate => {
        const buyMltplr = Math.random() >= .5 ? 1.1 : .9;
        const sellMltplr = Math.random() >= .5 ? 1.1 : .9;

        return {
          ...rate,
          buy: rate.buy * buyMltplr,
          sell: rate.sell * sellMltplr
        };
      }),
    });
  }

  render() {
    const { rates } = this.state;

    return (
      <div className="App">
        {rates.map(
          (rate, index) => <RateCard key={index} rate={rate}/>
        )}
      </div>
    );
  }
}

export default App;
