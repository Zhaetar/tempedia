import { render, screen } from "@testing-library/react";
import React from "react";
import TemtemCard from ".";
import TemtemList from ".";

test("renders learn react link", () => {
  render(<TemtemCard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
