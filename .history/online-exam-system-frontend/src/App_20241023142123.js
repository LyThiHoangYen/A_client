import Sidebar from "./components/sideBar";
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
