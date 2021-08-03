import React from "react";
import { render } from "@testing-library/react";
import Vision from "./Vision";

describe("Vision tests", () => {
  it("should render", () => {
    expect(render(<Vision />)).toBeTruthy();
  });
});
