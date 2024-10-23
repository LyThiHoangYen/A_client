import Question from "./question";
import Header from "./header";

function TakeTheExam() {
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

  return (
    <div className="h-full p-8 overflow-y-auto">
      <Header examCode="1234567" />
      <div>
        {questions.map((q) => (
          <Question key={q.number} {...q} />
        ))}
      </div>
    </div>
  );
}

export default TakeTheExam;