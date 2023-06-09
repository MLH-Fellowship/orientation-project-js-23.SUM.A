import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";

import Home from "./pages/Home";
import AddSkill from "./pages/AddSkill";
import AddExperience from "./pages/AddExperience";
import { BrowserRouter } from "react-router-dom";

import ResumeToExport from "./components/ResumeToExport/ResumeToExport";
import ResumeContext, { ResumeContextProvider } from "./store/resume-context";
import { useContext } from "react";
import CustomDropzone from "./components/Dropzone/CustomDropzone";

jest.mock("axios");

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

  test("should make a POST request when form is submitted", async () => {
    render(
      <BrowserRouter>
        <AddExperience />
      </BrowserRouter>
    );

    // Populate the form fields
    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: "Software Engineer" },
    });
    fireEvent.change(screen.getByLabelText("Company"), {
      target: { value: "Best Company" },
    });
    fireEvent.click(
      screen.getByLabelText("I am currently working in this role")
    );
    fireEvent.change(screen.getByTestId("startMonthSelect"), {
      target: { value: "January" },
    });
    fireEvent.change(screen.getByTestId("startYearSelect"), {
      target: { value: "2022" },
    });
    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: "Coded so many cool things" },
    });
    fireEvent.change(screen.getByLabelText("Logo"), {
      target: { value: "example.png" },
    });

    // Mock the POST request
    const url = "http://127.0.0.1:5000/resume/experience";
    const requestBody = {
      title: "Software Engineer",
      company: "Best Company",
      start_date: "January 2022",
      end_date: "Present",
      description: "Coded so many cool things",
      logo: "example.png",
    };
    const expectedResponse = { id: 1 };
    axios.post.mockResolvedValueOnce({ data: expectedResponse });

    // Submit the form
    fireEvent.submit(screen.getByText("Submit"));

    // Check if the correct data was posted
    expect(axios.post).toHaveBeenCalledWith(url, requestBody);
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

describe("Drag and drop component", () => {
  test("renders drag and drop compnent", () => {
    render(<CustomDropzone />);

    const textEl = screen.getByText(
      /Drag and drop a file here, or click to select a file/
    );
    expect(textEl).toBeInTheDocument();
  });
});

describe("Drag and drop component", () => {
  test("does not render upload button", () => {
    render(<CustomDropzone />);

    const uploadBtn = screen.queryByText(/Confirm upload/);
    expect(uploadBtn).not.toBeInTheDocument();
  });
});
