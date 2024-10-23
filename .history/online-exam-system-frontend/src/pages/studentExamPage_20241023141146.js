import SidebarRight from "../components/rightSideBarExam";
import Sidebar from "../components/sidebar";
function StudentExamPage () {
    return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent />
      <SidebarRight />
    </div>
  );
};
export default App;