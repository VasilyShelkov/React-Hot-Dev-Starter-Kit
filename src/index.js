import 'babel-polyfill';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import deepForceUpdate from 'react-deep-force-update';
import App from './components/App';

require('../css/app.scss');

const rootElement = document.getElementById('root');

let instance = ReactDOM.render(
	<AppContainer>
		<App text="example" />
	</AppContainer>,
	rootElement
);

global.forceUpdate = () => deepForceUpdate(instance);

if (module.hot) {
  // Support hot reloading of components
	module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default;
    instance = ReactDOM.render(
      <AppContainer>
				<NextApp />
      </AppContainer>,
      rootElement
    );
  });
}
