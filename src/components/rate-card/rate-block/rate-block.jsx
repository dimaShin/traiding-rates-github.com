import React from 'react';
import { DisplayRate } from '../display-rate/display-rate';
import './rate-block.css';

export const RateBlock = ({ pair, rate, blockType }) => {
  const mainCurrency = pair.split(' ')[0];
  const paths = {
    buy: 'M 7 25 L 7 30 L 25 50 L 105 50 L 105 5 L 25 5 L 7 25 Z',
    sell: 'M 103 25 L 103 30 L 85 50 L 5 50 L 5 5 L 85 5 L 103 25 Z',
  };

  return (
    <div className={`${blockType}-block rate-block`}>
      <div className="block-title">
        <span className="block-type">{blockType}&nbsp;</span>
        <span className="block-currency">{mainCurrency}</span>
      </div>
      <span className="block-value">
        <DisplayRate value={rate} />
      </span>
      <svg height="55" width="110">
        <path d={paths[blockType]} />
      </svg>
    </div>
  )
};
