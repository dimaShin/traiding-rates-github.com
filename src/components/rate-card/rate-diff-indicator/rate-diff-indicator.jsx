import React from 'react';
import './rate-diff-indicator.css'

export const RateDiffIndicator = ({ isUp }) => {
  const className = `fa ${isUp ? 'fa-arrow-up' : 'fa-arrow-down'}`;

  return (<div className="rate-diff-indicator"><i className={className} /></div>);
};