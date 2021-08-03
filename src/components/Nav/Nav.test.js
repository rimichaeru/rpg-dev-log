import React from "react";
import { render } from "@testing-library/react";
import Nav from "./Nav";

describe("Nav tests", () => {
  it("should render", () => {
    expect(render(<Nav />)).toBeTruthy();
  });
});
