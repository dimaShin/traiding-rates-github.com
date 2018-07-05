import React from 'react';
import { mount } from 'enzyme';
import App from './App';

it('App renders without crashing', () => {
  mount(<App />);
});

