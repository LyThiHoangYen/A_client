function Sidebar () {
    return (
      <div className="bg-blue-600 text-white w-1/4 p-8 flex flex-col items-center">
    <div className="text-3xl font-bold mb-8">A+ Sian</div>
    <UserProfile 
      name="Lý Thị Hoàng Yến"
      phone="0917917000"
      examsCreated={10}
    />
    <button className="mt-auto flex items-center text-white">
      <i className="fas fa-sign-out-alt mr-2"></i> Sign out
    </button>
  </div>
  };

export default Sidebar;
  