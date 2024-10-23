import SidebarRight from "../components/rightSideBarExam";
import TakeTheExam from "../components/takeTheExam";

function StudentExamPage() {
  return (
    <div className="flex h-screen">
      <div className="w-3/4 h-full">
        <TakeTheExam />
      </div>
      <div className="w-1/4 h-full">
        <SidebarRight />
      </div>
    </div>
  );
}

export default StudentExamPage;