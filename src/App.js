import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import GameAnalytics from "./components/Projects/GameAnalytics";
import AssessmentChecker from "./components/Projects/AssessmentChecker";
import KakiGo from "./components/Projects/KakiGo";
import Footer from "./components/Footer";
import Credentials from "./components/Resume/Credentials";
import Compeitions from "./components/Compeitions/compeitions";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./redesign.css";

function App() {
  return (
    <Router>
      <div className="App" id="scroll">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Navigate to="/" />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/game-analytics" element={<GameAnalytics />} />
          <Route path="/project/assessment-checker" element={<AssessmentChecker />} />
          <Route path="/project/kakigo" element={<KakiGo />} />
          <Route path="/compeitions" element={<Compeitions />} />
          <Route path="/credentials" element={<Credentials />} />
          {/* Old links keep working */}
          <Route path="/resume" element={<Navigate to="/credentials" replace />} />
          <Route path="/testimonials" element={<Navigate to="/credentials?tab=testimonials" replace />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
