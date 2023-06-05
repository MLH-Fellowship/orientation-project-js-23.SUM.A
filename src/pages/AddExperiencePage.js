import { useState } from "react";

const AddExperiencePage = () => {
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

  const handleChange = (e) => {
    setExperience((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("experience", experience);

    // make POST request to /resume/experience

    // reset values
    setExperience(defaultValues);
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
    const startYear = currentYear - 100;
    const renderedYearOptions = [];

    for (let year = currentYear; year >= startYear; year--) {
      renderedYearOptions.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    return renderedYearOptions;
  };

  return (
    <div>
      <h2>Add Experience</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={experience.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={experience.company}
            onChange={handleChange}
          />
        </label>

        <label>
          Start Date:
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
        </label>
        <label>
          End Date:
          <select
            name="endMonth"
            value={experience.endMonth}
            onChange={handleChange}
          >
            <option value="">Month</option>
            {renderMonthOptions()}
          </select>
          <select
            name="endYear"
            value={experience.endYear}
            onChange={handleChange}
          >
            <option value="">Year</option>
            {renderYearOptions()}
          </select>
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={experience.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Logo:
          <input
            type="text"
            name="logo"
            value={experience.logo}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Experience</button>
      </form>
    </div>
  );
};

export default AddExperiencePage;
