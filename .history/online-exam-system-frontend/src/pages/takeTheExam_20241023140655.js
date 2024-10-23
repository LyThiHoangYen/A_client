function MainContent () => {
    const questions = [
      {
        number: 1,
        question: "What is love ?",
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
      <div className="w-3/4 p-8">
        <Header examCode="1234567" />
        <div>
          {questions.map((q) => (
            <Question key={q.number} {...q} />
          ))}
        </div>
      </div>
    );
  };