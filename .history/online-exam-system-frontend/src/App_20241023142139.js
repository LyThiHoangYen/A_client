import Sidebar from "./components/sidebar";
import StudentExamPage from "./pages/studentExamPage";
import ExamManagementDashBoard from "./pages/examManagementDashboard";
function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <StudentExamPage />
    </div>
  );
}

export default App;
