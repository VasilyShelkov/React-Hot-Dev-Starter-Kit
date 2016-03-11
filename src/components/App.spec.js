import chai, { expect } from 'chai';
import jsxChai from 'jsx-chai'
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import App from './App'

chai.use(jsxChai);

describe('#App', () => {
	it('test-utils should render example prop', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<App text='example' />);

		const actual = renderer.getRenderOutput();
		const expected = <div>Welcome to the React-Hot-Dev-Starter-Kit example</div>;
		
		expect(actual).to.include(expected); //just making aware of the toEqualJSX for JSX shallow rendering testing
	});
});