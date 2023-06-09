import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import AddSkill from "./pages/AddSkill";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

import ResumeToExport from "./components/ResumeToExport/ResumeToExport";
import ResumeContext, { ResumeContextProvider } from "./store/resume-context";
import { useContext } from "react";
import EditSkill from "./pages/EditSkill";
import axios from "axios";

// jest.spyOn(console, "error").mockImplementation(() => {});

// Axios mock usinf jest
// This mocks the get method in axios
// jest.mock("axios", () => ({
//   ...jest.requireActual("axios"),
//   get: jest.fn(),
//   put: jest.fn(),
// }));

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

describe("Export resume as pdf", () => {
  test("renders ResumeToExport component", () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const linkElement = screen.getByText("Export");
    expect(linkElement).toBeInTheDocument();
    fireEvent.click(linkElement);

    const hiddenDiv = container.getElementsByClassName("hidden-div");
    expect(hiddenDiv.length).toBeGreaterThan(0);
    expect(hiddenDiv.length).toBeLessThan(2);

    const pageElement = container.getElementsByClassName("page");
    expect(pageElement.length).toBeGreaterThan(0);
  });
});

describe("Export resume as pdf", () => {
  test("renders ResumeToExport with resume context", () => {
    render(
      <ResumeContextProvider>
        <ResumeToExport />
      </ResumeContextProvider>
    );

    const javaSkill = screen.getByText(/JavaScript/);
    expect(javaSkill).toBeInTheDocument();

    const pythonSkill = screen.getByText(/Python/);
    expect(pythonSkill).toBeInTheDocument();
  });
});

describe("Test Edit Skill page", () => {
  test("render Edit screen page", () => {
    render(
      <BrowserRouter>
        <EditSkill />
      </BrowserRouter>
    );

    const textElement = screen.getByTestId("headSkill");
    expect(textElement).toBeInTheDocument();
  });

  // test("update skill", () => {});
});
