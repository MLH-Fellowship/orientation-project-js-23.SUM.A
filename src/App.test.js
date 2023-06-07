import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "./pages/Home";
import AddSkill from "./pages/AddSkill";
import AddExperience from "./pages/AddExperience";
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

  test("add experience button", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const addExperienceBtn = screen.getByTestId("addExperience");

    expect(addExperienceBtn).toBeInTheDocument();
    fireEvent.click(addExperienceBtn);
  });
});

describe("Test Add Skill page", () => {
  test("render Add Skill page", () => {
    render(
      <BrowserRouter>
        <AddSkill />
      </BrowserRouter>
    );

    const textElement = screen.getByText("Select Logo");
    expect(textElement).toBeInTheDocument();
  });
});

describe("Test Add Experience page", () => {
  test("render Add Experience page", () => {
    render(
      <BrowserRouter>
        <AddExperience />
      </BrowserRouter>
    );

    const textElement = screen.getByText("I am currently working in this role");
    expect(textElement).toBeInTheDocument();
  });
});
