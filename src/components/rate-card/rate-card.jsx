import React from 'react';
import { RateBlock } from './rate-block/rate-block';
import { RateDiffIndicator } from './rate-diff-indicator/rate-diff-indicator';

import './rate-card.styles.css';

export class RateCard extends React.PureComponent {

  state = {
    prevBuy: null,
    buyHasGrownUp: null,
  };

  static getDerivedStateFromProps({ rate: { buy }}, { prevBuy }) {
    return {
      prevBuy: buy,
      buyHasGrownUp: prevBuy !== null ? prevBuy < buy : null,
    }
  }

  renderDifferMarker() {
    return this.state.buyHasGrownUp === null
      ? <div className="indicator-placeholder" />
      : <RateDiffIndicator isUp={this.state.buyHasGrownUp} />
  }

  render() {
    const { rate: { pair, buy, sell } } = this.props;

    return (
      <div className="rate-card">
        <div className="rate-card-title">{pair}</div>
        <div className="rate-card-content">
          <RateBlock
            pair={pair}
            blockType="sell"
            rate={sell}
          />
          {this.renderDifferMarker()}
          <RateBlock
            pair={pair}
            blockType="buy"
            rate={buy}
          />
        </div>

      </div>
    )
  }
}