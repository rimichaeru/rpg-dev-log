import React from "react";
import { render } from "@testing-library/react";
import Routes from "./Routes";

describe("Routes tests", () => {
  it("should render", () => {
    expect(render(<Routes />)).toBeTruthy();
  });
});
