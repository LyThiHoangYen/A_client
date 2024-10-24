import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to install axios: npm install axios
import Logo from "../components/logo";
import UserProfile from "../components/userProfile";
import Button from "../components/button";
import Timer from "../components/timer";
import ProgressItem from "../components/progressTracking";

function StudentExamPage() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [studentInfo, setStudentInfo] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://your-api-endpoint.com/questions');
        setQuestions(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch questions. Please try again later.');
        setLoading(false);
      }
    };

    const fetchStudentInfo = async () => {
      try {
        const response = await axios.get('https://your-api-endpoint.com/student-info');
        setStudentInfo(response.data);
      } catch (err) {
        console.error('Failed to fetch student info:', err);
        // Optionally set an error state for student info
      }
    };

    fetchQuestions();
    fetchStudentInfo();
  }, []);

  const handleAnswerChange = (questionNumber, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionNumber]: answer
    }));
  };

  const progress = questions.map(q => ({
    questionNumber: q.number,
    answer: answers[q.number] || ''
  }));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <div className="bg-[#4a3aff] text-white w-1/4 h-screen p-8 flex flex-col items-center justify-between rounded-tr-[50px] rounded-br-[50px]">
        <div className="flex flex-col items-center">
          <Logo src="/images/logo.png" alt="logo" size="large" className="mb-8" />
          {studentInfo ? (
            <UserProfile 
              name={studentInfo.name}
              phone={studentInfo.phone}
              examsCreated={studentInfo.examsCreated}
              birthDate={studentInfo.birthDate}
              studentId={studentInfo.studentId}
              className="mb-8"
            />
          ) : (
            <div>Loading student info...</div>
          )}
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
              <Question 
                key={q.number} 
                {...q} 
                selectedAnswer={answers[q.number] || ''}
                onAnswerChange={handleAnswerChange}
              />
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

function Question({ number, question, options, selectedAnswer, onAnswerChange }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Question {number}</h2>
      <p className="mb-4">{question}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index} className="mb-2">
            <label className="flex items-center">
              <input 
                type="radio" 
                name={`question-${number}`} 
                value={option.charAt(0)}
                checked={selectedAnswer === option.charAt(0)}
                onChange={() => onAnswerChange(number, option.charAt(0))}
                className="mr-2" 
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentExamPage;
