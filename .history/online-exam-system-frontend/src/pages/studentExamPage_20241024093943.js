import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to install axios: npm install axios
import Logo from "../components/logo";
import UserProfile from "../components/userProfile";
import Button from "../components/button";
import Timer from "../components/timer";
import ProgressItem from "../components/progressTracking";
import ResultPopup from "../components/ResultPopup";

function StudentExamPage() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [studentInfo, setStudentInfo] = useState(null);
  const [examInfo, setExamInfo] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [examScore, setExamScore] = useState(0);
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [questionsResponse, studentInfoResponse, examInfoResponse] = await Promise.all([
          axios.get('https://your-api-endpoint.com/questions'),
          axios.get('https://your-api-endpoint.com/student-info'),
          axios.get('https://your-api-endpoint.com/exam-info')
        ]);

        setQuestions(questionsResponse.data);
        setStudentInfo(studentInfoResponse.data);
        setExamInfo(examInfoResponse.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError('Failed to fetch exam data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAnswerChange = (questionNumber, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionNumber]: answer
    }));
  };

  const handleSignOut = () => {
    // Perform any sign-out logic here (e.g., clearing local storage, etc.)
    // Then navigate to the login page
    navigate('/login');
  };

  const handleSubmit = async (isAutoSubmit = false) => {
    if (isExamSubmitted) return;

    try {
      // Here you would typically send the answers to your backend
      // and receive a score in response. For this example, we'll
      // simulate it with a random score.
      const score = Math.floor(Math.random() * (questions.length + 1));
      setExamScore(score);
      setShowResult(true);
      setIsExamSubmitted(true);

      if (isAutoSubmit) {
        console.log('Exam auto-submitted due to time expiration');
      }
    } catch (error) {
      console.error('Error submitting exam:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  const handleCloseResult = () => {
    setShowResult(false);
    // Optionally navigate away or reset the exam state here
  };

  const handleTimeUp = () => {
    handleSubmit(true);
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
          onClick={handleSignOut}
        >
          ↪️ Sign Out
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-grow max-w-3/4 h-full overflow-auto">
        <div className="h-full p-8 overflow-y-auto">
          {examInfo && <Header examName={examInfo.name} examCode={examInfo.code} />}
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
            <Timer initialTime={3600} onTimeUp={handleTimeUp} />
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
              onClick={() => handleSubmit(false)}
              disabled={isExamSubmitted}
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

      <ResultPopup
        isOpen={showResult}
        onClose={handleCloseResult}
        score={examScore}
        totalQuestions={questions.length}
      />
    </div>
  );
}

// Helper components
function Header({ examName, examCode }) {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold">{examName}</h1>
      <p className="text-gray-600">Exam Code: {examCode}</p>
    </div>
  );
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
