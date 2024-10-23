import ProgressItem from "./progressTracking";
import Timer from "./timer";
function SidebarRight () {
    const progress = Array(15).fill({ questionNumber: 1, answer: 'A' });
    
    return (
      <div className="w-1/4 p-8 bg-gray-100">
        <Timer timeLeft="01:15" />
        <div className="mb-8">
          <div className="text-lg font-bold mb-2">Progress</div>
          <div className="text-sm">
            {progress.map((item, index) => (
              <ProgressItem 
                key={index}
                questionNumber={item.questionNumber} 
                answer={item.answer}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
            <i className="fas fa-plus mr-2"></i> Submit
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded flex items-center">
            <i className="fas fa-times mr-2"></i> Exit
          </button>
        </div>
      </div>
    );
  };

export default SidebarRight;