import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/loginPage";
import StudentExamPage from "./pages/studentExamPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/exam" element={<StudentExamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
