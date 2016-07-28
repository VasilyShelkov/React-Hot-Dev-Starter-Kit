import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('#App', () => {
	it('enzyme should render example prop', () => {
		const wrapper = shallow(<App text="example" />);

		expect(wrapper.find('div').text()).to.equal("Welcome to the React-Hot-Dev-Starter-Kit example");
	});
});
