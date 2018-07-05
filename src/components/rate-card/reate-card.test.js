import React from 'react';
import { shallow } from 'enzyme';
import { RateCard } from './rate-card';
import rates from '../../rates.mock';

it('RateCard renders without crashing', () => {
  const div = document.createElement('div');

  shallow(<RateCard rate={rates[0]} />, div);
});

it('RateCard crash without required props', () => {
  const div = document.createElement('div');

  expect(() => {
    shallow(<RateCard />, div)
  }).toThrow();
});