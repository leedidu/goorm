import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Content from "./Components/Content";
import Book from "./Components/Book";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="/content">Content</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
