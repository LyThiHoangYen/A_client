function Sidebar () {
    return (
      <div className="w-1/4 bg-indigo-600 text-white p-6 flex flex-col items-center">
        <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
        <p className="text-sm">Tên: Lý Thị Hoàng Yến</p>
        <p className="text-sm">SĐT: 0917917000</p>
        <p className="text-sm mb-6">Exam created: 10</p>
        <div className="w-full">
          <div className="flex justify-between text-sm mb-2">
            <p>Start Time</p>
            <input className="bg-gray-100 p-1 rounded w-24" type="datetime-local" />
          </div>
          <div className="flex justify-between text-sm mb-2">
            <p>End Time</p>
            <input className="bg-gray-100 p-1 rounded w-24" type="datetime-local" />
          </div>
          <div className="flex justify-between text-sm">
            <p>Duration</p>
            <input className="bg-gray-100 p-1 rounded w-24" type="text" placeholder="min" />
          </div>
        </div>
      </div>
    );
  };

export default Sidebar;
  