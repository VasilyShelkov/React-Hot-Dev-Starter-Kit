import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';

import './index.scss';

export const Root = () => (
  <BrowserRouter>
    <div className="text--xlarge">
      Welcome to the React-Hot-Dev-Starter-Kit
    </div>
  </BrowserRouter>
);

if (!module.hot) render(<Root />, document.querySelector('react'));
