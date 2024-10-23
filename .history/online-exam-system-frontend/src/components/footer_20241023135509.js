const Footer = ({ onExamClick }) => (
    <div className="flex items-center p-2">
      Take an exam?{" "}
      <p 
        className="font-bold cursor-pointer ml-1 hover:text-blue-600" 
        onClick={onExamClick}
      >
        Click here
      </p>
    </div>
  );