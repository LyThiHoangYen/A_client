import SidebarRight from "../components/rightSideBarExam";
import TakeTheExam from "../components/takeTheExam";

function StudentExamPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-grow max-w-3/4 h-full overflow-auto">
        <TakeTheExam />
      </div>
      <div className="w-1/4 min-w-[250px] h-full overflow-auto">
        <SidebarRight />
      </div>
    </div>
  );
}

export default StudentExamPage;