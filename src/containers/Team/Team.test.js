import React from "react";
import { render } from "@testing-library/react";
import Team from "./Team";

describe("Team tests", () => {
  it("should render", () => {
    expect(render(<Team />)).toBeTruthy();
  });
});
