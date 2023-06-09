import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/AddEducation";
import AddExperience from "./pages/AddExperience";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddSkill from "./pages/AddSkill";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-experience" element={<AddExperience />} />
        <Route path="/add-skill" element={<AddSkill />} />
        <Route path="/resume/education" element={<Education />} />
      </Routes>
    </>
  );
}

export default App;

