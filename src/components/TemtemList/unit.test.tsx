import { render, screen } from "@testing-library/react";
import React from "react";
import TemtemList from ".";

test("renders learn react link", () => {
  render(<TemtemList list={[]} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
