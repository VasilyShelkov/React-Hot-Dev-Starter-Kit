import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('src/Home.js', () => {
  it('renders the Home page', () => {
    expect(renderer.create(<Home />).toJSON())
      .toMatchSnapshot();
  });
});
