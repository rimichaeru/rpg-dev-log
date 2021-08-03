import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer tests", () => {
  it("should render", () => {
    expect(render(<Footer />)).toBeTruthy();
  });
});
