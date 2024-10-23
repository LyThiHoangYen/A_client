const Question = ({ number, question, options }) => (
    <div className="mb-8">
      <div className="text-xl font-bold mb-4">Question {number}: {question}</div>
      <div className="ml-4">
        {options.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </div>
    </div>
  );