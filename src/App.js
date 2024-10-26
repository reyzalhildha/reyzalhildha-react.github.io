import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Navbar from './routes/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
