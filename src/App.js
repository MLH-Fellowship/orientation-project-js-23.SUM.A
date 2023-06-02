import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddSkill from "./pages/AddSkill";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-skill" element={<AddSkill />} />
    </Routes>
  );
}

export default App;
