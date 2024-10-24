import React from 'react';
import Logo from "../components/logo";
import UserProfile from "../components/userProfile";
import Button from "../components/button";
import Timer from "../components/timer";
import ProgressItem from "../components/progressTracking";

function StudentExamPage() {
  const questions = [
    {
      number: 1,
      question: "What is love?",
      options: [
        "A. Love is life",
        "B. Love is war",
        "C. Love is lie",
        "D. Love is drama"
      ]
    },
    // Repeat for questions 2 and 3...
  ];

  const progress = Array(15).fill({ questionNumber: 1, answer: 'A' });

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <div className="bg-[#4a3aff] text-white w-1/4 h-screen p-8 flex flex-col items-center justify-between rounded-tr-[50px] rounded-br-[50px]">
        <div className="flex flex-col items-center">
          <Logo src="/images/logo.png" alt="logo" size="large" className="mb-8" />
          <UserProfile 
            name="Lý Thị Hoàng Yến"
            phone="0917917000"
            examsCreated={10}
            birthDate="1990-01-01"
            studentId="ST12345"
            className="mb-8"
          />
        </div>
        <Button 
          className="mt-auto bg-white text-[#4a3aff] hover:bg-gray-100 py-2 px-4 rounded-full flex items-center"
          onClick={() => console.log('Logout clicked')}
        >
          ↪️ Logout
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-grow max-w-3/4 h-full overflow-auto">
        <div className="h-full p-8 overflow-y-auto">
          <Header examCode="1234567" />
          <div>
            {questions.map((q) => (
              <Question key={q.number} {...q} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4 min-w-[250px] h-full overflow-auto">
        <div className="h-full p-8 bg-gray-100 flex flex-col justify-between">
          <div>
            <Timer initialTime={3600} /> {/* 1 hour in seconds */}
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
          </div>
          <div className="flex justify-between">
            <Button 
              className="bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded-full flex items-center"
              onClick={() => console.log('Submit clicked')}
            >
              📤 Submit
            </Button>
            <Button 
              className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-full flex items-center"
              onClick={() => console.log('Exit clicked')}
            >
              ❌ Exit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper components
function Header({ examCode }) {
  return <h1 className="text-2xl font-bold mb-4">Exam Code: {examCode}</h1>;
}

function Question({ number, question, options }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Question {number}</h2>
      <p className="mb-4">{question}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index} className="mb-2">
            <label className="flex items-center">
              <input type="radio" name={`question-${number}`} className="mr-2" />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentExamPage;
