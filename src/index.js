import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Other from "./Other";
import NotFound from "./NotFound";

export const Root = () =>
  <Router>
    <div>
      <div className="text--xlarge">
        Welcome to the React-Hot-Dev-Starter-Kit with hot loading
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/somewhereElse">Somewhere Else</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/somewhereElse" component={Other} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>;

if (!module.hot) render(<Root />, document.querySelector("react"));
