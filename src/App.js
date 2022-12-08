import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Students from "./Students/Students";
import Navigation from "./Shared/Navigation/Navigation";
import AddStudents from "./AddStudents/AddStudents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Students />} />
          <Route path="/addStudents" element={<AddStudents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
