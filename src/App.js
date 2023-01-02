import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Students from "./Students/Students";
import Navigation from "./Shared/Navigation/Navigation";
import AddStudents from "./AddStudents/AddStudents";
import AuthProvider from "./Context/AuthProvider";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Students />} />
            <Route path="/addStudents" element={<AddStudents />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
