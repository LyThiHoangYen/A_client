import React, { useState } from 'react';
import './QuizForm.css'; // Import file CSS để định dạng

function QuizForm() {
  const [quizName, setQuizName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Thêm một câu hỏi mới
  const addQuestion = () => {
    setQuestions([
      ...questions,
      { 
        questionText: '', 
        answers: ['', '', '', ''], // Khởi tạo với 4 đáp án trống
        correctAnswerIndex: null // Khởi tạo không có đáp án đúng
      }
    ]);
  };

  // Xử lý thay đổi câu hỏi
  const handleQuestionChange = (index, newText) => {
    const newQuestions = [...questions];
    newQuestions[index].questionText = newText;
    setQuestions(newQuestions);
  };

  // Xử lý thay đổi đáp án
  const handleAnswerChange = (questionIndex, answerIndex, newText) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers[answerIndex] = newText;
    setQuestions(newQuestions);
  };

  // Xóa câu hỏi
  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  return (
    <div className="quiz-container">
      {/* Sidebar bên trái */}
      <div className="sidebar">
        <div className="user-info">
          <div className="avatar"></div>
          <p>Tên: Lý Thị Hoàng Yến</p>
          <p>SĐT: 0917917000</p>
          <p>Exam created: {questions.length}</p>
        </div>
        <div className="exam-timing">
          <label>Start Time</label>
          <input 
            type="datetime-local" 
            value={startTime} 
            onChange={(e) => setStartTime(e.target.value)} 
          />
          <label>End Time</label>
          <input 
            type="datetime-local" 
            value={endTime} 
            onChange={(e) => setEndTime(e.target.value)} 
          />
        </div>
        <button className="sign-out">Sign out</button>
      </div>

      {/* Form tạo bài kiểm tra */}
      <div className="quiz-form">
        <div className="quiz-header">
          <label>Exam Name: </label>
          <input 
            type="text" 
            value={quizName} 
            onChange={(e) => setQuizName(e.target.value)} 
            placeholder="Enter exam name" 
          />
          <button className="create-btn">Create</button>
        </div>

        {/* Danh sách câu hỏi */}
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question-card">
            <h4>Question {questionIndex + 1}: 
              <input 
                type="text" 
                value={question.questionText} 
                onChange={(e) => handleQuestionChange(questionIndex, e.target.value)} 
                placeholder="Enter question" 
              />
            </h4>
            <div className="options">
              {question.answers.map((answer, answerIndex) => (
                <div key={answerIndex} className="option">
                  <input 
                    type="radio" 
                    name={`question-${questionIndex}`} 
                    value={answer} 
                    checked={question.correctAnswerIndex === answerIndex} 
                    onChange={() => {
                      const newQuestions = [...questions];
                      newQuestions[questionIndex].correctAnswerIndex = answerIndex;
                      setQuestions(newQuestions);
                    }}
                  />
                  <input 
                    type="text" 
                    value={answer} 
                    onChange={(e) => handleAnswerChange(questionIndex, answerIndex, e.target.value)} 
                    placeholder={`Answer ${answerIndex + 1}`} 
                  />
                </div>
              ))}
            </div>
            <button onClick={() => removeQuestion(questionIndex)}>Remove Question</button>
          </div>
        ))}

        {/* Nút thêm câu hỏi */}
        <button className="add-question-btn" onClick={addQuestion}>
          + Add question
        </button>
      </div>
    </div>
  );
}

export default QuizForm;
