import expect from 'expect';
import expectJSX from 'expect-jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

import App from './App'

expect.extend(expectJSX);

describe('App', () => {
	it('testing work', () => {
		expect(true).toEqual(true);
	});

	it('test-utils should render example prop', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<App text='example' />);
		const actual = renderer.getRenderOutput();
		const expected = <div>Welcome to the React-Hot-Dev-Starter-Kit example</div>;
		expect(actual).toIncludeJSX(expected); //just making aware of the toEqualJSX for JSX shallow rendering testing
	});
});