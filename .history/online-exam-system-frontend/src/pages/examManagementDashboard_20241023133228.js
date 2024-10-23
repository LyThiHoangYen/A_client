function MainContent () => {
    const studentData = [
      { name: "Student 1", result: 10 },
      { name: "Student 1", result: 10 },
      { name: "Student 1", result: 10 },
      { name: "Student 1", result: 10 },
    ];
  
    return (
      <div className="flex-1 p-8">
        <Header />
        <ResultsTable students={studentData} />
        <BackButton />
      </div>
    );
  };