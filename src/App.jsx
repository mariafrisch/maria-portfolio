import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PulseCaseStudy from "./PulseCaseStudy";
import AgeStrongCaseStudy from "./AgeStrongCaseStudy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pulse" element={<PulseCaseStudy />} />
        <Route path="/agestrong" element={<AgeStrongCaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
