import Sidebar from "./components/sidebar";
import StudentExamPage from "./pages/studentExamPage";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar  />
      <StudentExamPage />
    </div>
  );
}

export default App;