import React from 'react';

export default ({ pattern, pathname }) => (
  <div>
    <h1>Router Some Other Page</h1>
    <ul>
      <li><strong>Pattern</strong>: {pattern}</li>
      <li><strong>Pathname</strong>: {pathname}</li>
    </ul>
  </div>
 );