import React from "react";

export default ({ match }) =>
  <div>
    <h1>Router Home</h1>
    <ul>
      <li>
        <strong>Pathname</strong>: {match.path}
      </li>
    </ul>
  </div>;
