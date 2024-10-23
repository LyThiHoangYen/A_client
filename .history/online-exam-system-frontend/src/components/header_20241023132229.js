const Header = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Exam Name"
          className="border p-2 rounded-md w-1/3"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md">Create</button>
      </div>
    );
  };
  