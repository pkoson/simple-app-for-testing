import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
});
describe('Red button', () => {
  it('should call handleClick', () => {});
});
