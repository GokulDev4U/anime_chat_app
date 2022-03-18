import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
