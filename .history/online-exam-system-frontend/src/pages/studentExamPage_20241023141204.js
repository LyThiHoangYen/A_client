import SidebarRight from "../components/rightSideBarExam";
import Sidebar from "../components/sidebar";
import TakeTheExam from "../components/takeTheExam";
function StudentExamPage () {
    return (
    <div className="flex h-screen">
      <Sidebar />
      <TakeTheExam />
      <SidebarRight />
    </div>
  );
};
export default App;