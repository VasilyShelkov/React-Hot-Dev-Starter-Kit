import React from 'react';
import renderer from 'react-test-renderer';
import Other from './Other';

describe('src/Other.js', () => {
  it('renders the Other page', () => {
    expect(renderer.create(<Other />).toJSON())
      .toMatchSnapshot();
  });
});
