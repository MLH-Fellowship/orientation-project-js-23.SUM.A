import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import AddSkill from "./pages/AddSkill";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

describe("Home page test", () => {
  test("renders Home page", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const linkElement = screen.getByText("Export");
    expect(linkElement).toBeInTheDocument();
  });

  test("add skill button", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const addSkillBtn = screen.getByTestId("addSkill");

    expect(addSkillBtn).toBeInTheDocument();
    fireEvent.click(addSkillBtn);
  });
});

describe("Test Add Skill page", () => {
  test("render Add screen page", () => {
    render(
      <BrowserRouter>
        <AddSkill />
      </BrowserRouter>
    );

    const textElement = screen.getByText("Select Logo");
    expect(textElement).toBeInTheDocument();
  });
});
