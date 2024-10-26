import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="container-navbar">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/history">History</Link>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
