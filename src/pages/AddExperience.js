import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AddSectionContainer } from "../styles/AddSection.style.js";

const AddExperience = () => {
  const navigate = useNavigate();

  const defaultValues = {
    title: "",
    company: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    description: "",
    logo: "",
  };

  const [experience, setExperience] = useState(defaultValues);
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);

  const handleChange = (event) => {
    setExperience((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleToggle = () => {
    setIsCurrentlyWorking(!isCurrentlyWorking);
    if (!isCurrentlyWorking) {
      // Reset end date fields after toggling to currently working
      setExperience((prevState) => ({
        ...prevState,
        endMonth: "",
        endYear: "",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedExperience = formatExperience(experience);

    axios
      .post("http://127.0.0.1:5000/resume/experience", formattedExperience)
      .then((response) => {
        console.log("Response:", response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const formatExperience = (experience) => {
    return {
      title: experience.title,
      company: experience.company,
      start_date: `${experience.startMonth} ${experience.startYear}`,
      end_date: isCurrentlyWorking
        ? "Present"
        : `${experience.endMonth} ${experience.endYear}`,
      description: experience.description,
      logo: experience.logo,
    };
  };

  const renderMonthOptions = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return months.map((month) => (
      <option key={month} value={month}>
        {month}
      </option>
    ));
  };

  const renderYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const renderedYearOptions = [];

    for (let i = 0; i <= 100; i++) {
      const year = currentYear - i;
      renderedYearOptions.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    return renderedYearOptions;
  };

  return (
    <AddSectionContainer>
      <h1>Add Experience</h1>
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="form-input">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={experience.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={experience.company}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <input
            type="checkbox"
            checked={isCurrentlyWorking}
            onChange={handleToggle}
          />
          <label> I am currently working in this role</label>
        </div>

        <div className="form-input">
          <label>Start Date</label>
          <fieldset>
            <select
              name="startMonth"
              value={experience.startMonth}
              onChange={handleChange}
            >
              <option value="">Month</option>
              {renderMonthOptions()}
            </select>
            <select
              name="startYear"
              value={experience.startYear}
              onChange={handleChange}
            >
              <option value="">Year</option>
              {renderYearOptions()}
            </select>
          </fieldset>
        </div>

        <div className="form-input">
          <label>End Date</label>
          <fieldset>
            <select
              name="endMonth"
              value={experience.endMonth}
              onChange={handleChange}
              disabled={isCurrentlyWorking}
            >
              <option value="">Month</option>
              {renderMonthOptions()}
            </select>
            <select
              name="endYear"
              value={experience.endYear}
              onChange={handleChange}
              disabled={isCurrentlyWorking}
            >
              <option value="">Year</option>
              {renderYearOptions()}
            </select>
          </fieldset>
        </div>

        <div className="form-input">
          <label>Description</label>
          <textarea
            name="description"
            value={experience.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-input">
          <label>Logo</label>
          <input
            type="text"
            name="logo"
            value={experience.logo}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-add">
          Submit
        </button>
      </form>
    </AddSectionContainer>
  );
};

export default AddExperience;
