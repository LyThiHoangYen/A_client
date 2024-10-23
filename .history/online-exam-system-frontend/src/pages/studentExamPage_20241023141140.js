import SidebarRight from "../components/rightSideBarExam";
import Sidebar
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