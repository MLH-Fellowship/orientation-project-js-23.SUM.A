import { render, screen } from "@testing-library/react";
import Home from "./pages/Home";

test("Renders Home Page", () => {
  render(<Home />);
  const linkElement = screen.getByText("Skills");
  expect(linkElement).toBeInTheDocument();
});
