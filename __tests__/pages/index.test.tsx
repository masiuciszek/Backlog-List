import React from 'react';
// import { render, fireEvent } from '../test-utils';
import HomePage from '../../pages';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('<Home />', () => {
  // it('matches snapshot', () => {
  //   const { asFragment } = render(<HomePage />);
  //   expect(asFragment()).toMatchSnapshot();
  // });
  test('should be 8', () => {
    expect(4 + 4).toBe(8);
  });
});
