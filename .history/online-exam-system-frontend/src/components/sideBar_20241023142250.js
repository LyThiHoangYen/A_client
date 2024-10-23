import UserProfile from "./userProfile";
import Button from "./button";
function Sidebar () {
  return (
    <div className="bg-[#4a3aff] text-white w-1/4 p-8 flex flex-col items-center rounded-tr-2xl rounded-br-2xl">
      <div className="text-3xl font-bold mb-8">A+ Sian</div>
      <UserProfile 
        name="Lý Thị Hoàng Yến"
        phone="0917917000"
        examsCreated={10}
      />
      <Button text="Create Exam" />
    </div>
  );
  };

export default Sidebar;
  