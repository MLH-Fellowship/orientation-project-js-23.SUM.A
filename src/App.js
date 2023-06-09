import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import AddSkill from "./pages/AddSkill";
import EditSkill from "./pages/EditSkill";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-skill" element={<AddSkill />} />
        <Route path="/add-skill/:index" element={<EditSkill />} />
      </Routes>
    </>
  );
}

export default App;
