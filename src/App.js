import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import AddExperience from "./pages/AddExperience";
import AddSkill from "./pages/AddSkill";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-experience" element={<AddExperience />} />
        <Route path="/add-skill" element={<AddSkill />} />
      </Routes>
    </>
  );
}

export default App;
