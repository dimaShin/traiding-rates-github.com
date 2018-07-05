import React from 'react';
import './display-rate.css';

export const DisplayRate = ({ value }) => {
  /*
    we can assume that value will be always float and dot will be always in a base part.
    If not, we will have to add statement to calculate length of blocks
    for this purpose, probably, we should use indexOf('.')
  * */
  const maxLength = 7;
  const baseLength = 4;
  const endLength = 2;
  const stringValue = value.toString().padEnd(maxLength, '0');

  return (
    <React.Fragment>
      <span className="rate-base">{stringValue.substr(0, baseLength)}</span>
      <span className="rate-end">{stringValue.substr(baseLength, endLength)}</span>
      <span className="rate-index">{stringValue.substr(baseLength + endLength, 1)}</span>
    </React.Fragment>
  )
};
