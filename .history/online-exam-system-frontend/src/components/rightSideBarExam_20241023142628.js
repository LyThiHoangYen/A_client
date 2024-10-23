import ProgressItem from "./progressTracking";
import Timer from "./timer";
import Button from "./button";
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
            <Button text="Submit" />
          
          </button>
        </div>
      </div>
    );
  };

export default SidebarRight;