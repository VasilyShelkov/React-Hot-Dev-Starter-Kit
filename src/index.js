import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
//import { Router, Route, browserHistory } from 'react-router';
//import routes from '???';

const rootElement = document.getElementById('root');

let render = () => {
	const App = require('./components/App').default;
	ReactDOM.render(<App text="example" />, rootElement);
  //<Router history={browserHistory} routes={routes}/>, document.getElementById('app'));
}

if (module.hot) {
  // Support hot reloading of components
  const renderApp = render;

  // and display an overlay for runtime errors
  const renderError = (error) => {
    const RedBox = require('redbox-react');
    ReactDOM.render(
      <RedBox error={error} />,
      rootElement
    );
  };

  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };

  module.hot.accept('./components/App', () => {
    setTimeout(render);
  });
};

render();