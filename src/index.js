import React, { useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./resources/css/style.css";
import "./resources/css/styleId/skills.css";
import "./resources/css/animation.css";
import "./resources/css/mixins.css";
import "./resources/font/fonts.css";

import Navbar from "./components/Navbar";
import Profile from "./routes/Profile";
import Skills from "./routes/Skills";
import Projects from "./routes/Projects";
import Ollama from "./routes/Ollama";

const INACTIVITY_TIME = 30 * 60 * 1000; // 30 menit dalam milidetik

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem("hasLoaded");

    if (hasLoadedBefore) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("hasLoaded", "true");
      }, 3000);
    }

    let inactivityTimer;

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setIsLoading(true);
        localStorage.removeItem("hasLoaded"); // Hapus flag supaya loading muncul lagi
        setTimeout(() => setIsLoading(false), 3000);
      }, INACTIVITY_TIME);
    };

    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("keydown", resetInactivityTimer);
    window.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        resetInactivityTimer();
      }
    });

    resetInactivityTimer(); // Jalankan saat pertama kali

    return () => {
      window.removeEventListener("mousemove", resetInactivityTimer);
      window.removeEventListener("keydown", resetInactivityTimer);
      window.removeEventListener("visibilitychange", resetInactivityTimer);
      clearTimeout(inactivityTimer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <Atom color="#f5f5f5" size="large" text="Loading..." textColor="#f5f5f5" />
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ollama" element={<Ollama />} />
          </Routes>
        </>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);

reportWebVitals();
