import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import renderer from 'react-test-renderer';
import NotFound from './NotFound';

describe('src/NotFound.js', () => {
  it('renders the link back to the home page', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('h1').text()).toEqual('Oops! You\'ve ended up in a dark place');
  });

  it('renders the link back to the home page', () => {
    const wrapper = shallow(<NotFound />);
    const linkToHomePage = wrapper.find(Link);
    expect(linkToHomePage.length).toEqual(1);
    expect(linkToHomePage.children().text()).toEqual('Click here to return to normality');
  });
});
