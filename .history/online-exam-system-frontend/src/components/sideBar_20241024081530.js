import UserProfile from "./userProfile";
import Button from "./button";
import Logo from "./logo";

function Sidebar() {
  return (
    <div className="bg-[#4a3aff] text-white w-1/4 h-screen p-8 flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <Logo src="/images/logo.png" alt="logo" size="large" className="mb-8" />
        <UserProfile 
          name="Lý Thị Hoàng Yến"
          phone="0917917000"
          examsCreated={10}
          className="mb-8"
        />
      </div>
      <Button className="mt-auto">Logout</Button>
    </div>
  );
}

export default Sidebar;
