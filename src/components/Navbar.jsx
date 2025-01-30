import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Navbar() {
    const [isDarkMode, setDarkMode] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = checked => {
        setDarkMode(checked);
        document.documentElement.setAttribute(
            "data-theme",
            checked ? "dark" : "light"
        );
    };

    // Default theme based on system preference
    useEffect(() => {
        const prefersDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        setDarkMode(prefersDarkMode);
        document.documentElement.setAttribute(
            "data-theme",
            prefersDarkMode ? "dark" : "light"
        );
    }, []);

    return (
        <>
            <div className="container-navbar">
                <ul>
                    <Link to="/">Profile</Link>
                    <Link to="/skills">Skilss</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/ollama">Ollama-Chat</Link>
                </ul>

                <div className="btn-dark-mode">
                    <DarkModeSwitch
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={30}
                    />
                </div>
            </div>
        </>
    );
}

export default Navbar;
