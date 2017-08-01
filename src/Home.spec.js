import React from "react";
import Home from "./Home";

describe("src/Home.js", () => {
  it("renders the Home page", () => {
    expect(
      renderer.create(<Home match={{ path: "/home" }} />).toJSON()
    ).toMatchSnapshot();
  });
});
