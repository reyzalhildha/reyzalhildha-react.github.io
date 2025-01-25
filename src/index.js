import React, { useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import "./resources/css/style.css";
import "./resources/css/animation.css";
import "./resources/css/mixins.css";
import "./resources/font/fonts.css";

import Navbar from "./components/Navbar";
import Profile from "./routes/Profile";
import Skills from "./routes/Skills";
import Projects from "./routes/Projects";

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State untuk mengatur loading
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Setelah 3 detik, matikan loading
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        // Tampilan loading
        <div className="loading">
          <Atom color="#f5f5f5" size="large" text="Loading..." textColor="#f5f5f5" />
        </div>
      ) : (
        // Tampilan aplikasi setelah loading selesai
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/about" element={<Skills />} />
            <Route path="/history" element={<Projects />} />
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
