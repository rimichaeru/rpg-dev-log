import React from "react";
import { render } from "@testing-library/react";
import DevLog from "./DevLog";

describe("DevLog tests", () => {
  it("should render", () => {
    expect(render(<DevLog />)).toBeTruthy();
  });
});
