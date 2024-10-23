import Sidebar from "./components/sidebar";
import StudentExamPage from "./pages/studentExamPage";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <button className="m-4 p-2 bg-blue-500 text-white rounded">Create Exam</button>
        <StudentExamPage />
      </div>
    </div>
  );
}

export default App;
