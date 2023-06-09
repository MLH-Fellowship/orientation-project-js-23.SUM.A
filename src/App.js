import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/AddEducation";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import AddSkill from "./pages/AddSkill";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-skill" element={<AddSkill />} />
      </Routes>
    </>
      <Route path="/resume/education" element={<Education />} />
  );
}

export default App;

