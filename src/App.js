import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume/education" element={<Education />} />
    </Routes>
  );
}

export default App;

