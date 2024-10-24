import React from 'react';
import Button from './button';

function ResultPopup({ isOpen, onClose, score, totalQuestions }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Exam Result</h2>
        <p className="text-lg mb-4">
          Your score: <span className="font-bold">{score}</span> out of {totalQuestions}
        </p>
        <p className="mb-6">
          Percentage: <span className="font-bold">{((score / totalQuestions) * 100).toFixed(2)}%</span>
        </p>
        <div className="flex justify-end">
          <Button
            className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ResultPopup;