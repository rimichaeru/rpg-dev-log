import React from "react";
import { render } from "@testing-library/react";
import Post from "./Post";

describe("Post tests", () => {
  it("should render", () => {
    expect(render(<Post />)).toBeTruthy();
  });
});
