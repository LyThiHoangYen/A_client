import UserProfile from "./userProfile";
import Button from "./button";
import Logo from "./logo";

function Sidebar () {
  return (
    <div className="bg-[#4a3aff] text-white w-1/4 p-8 flex flex-col items-center rounded-tr-2xl rounded-br-2xl">
      <Logo src="" alt="Logo" size="large" />
      <UserProfile 
        name="Lý Thị Hoàng Yến"
        phone="0917917000"
        examsCreated={10}
      />
    </div>
  );
  };

export default Sidebar;
  