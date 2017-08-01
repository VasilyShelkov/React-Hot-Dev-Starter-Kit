import React from "react";
import Other from "./Other";

describe("src/Other.js", () => {
  it("renders the Other page", () => {
    expect(
      renderer.create(<Other match={{ path: "/somewhereElse" }} />).toJSON()
    ).toMatchSnapshot();
  });
});
