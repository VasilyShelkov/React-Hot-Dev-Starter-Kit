import React from "react";

export default ({ match }) =>
  <div>
    <h1>Router Some Other Page</h1>
    <ul>
      <li>
        <strong>Pathname</strong>: {match.path}
      </li>
    </ul>
  </div>;
