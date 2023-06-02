import { render, screen } from "@testing-library/react";
// import AddSkill from "./pages/AddSkill";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

test("renders add skill page", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const linkElement = screen.getByText("Export");
  expect(linkElement).toBeInTheDocument();
});
