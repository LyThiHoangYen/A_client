import Header from "../components/header";
import ResultsTable from "../components/resultsTable";
import BackButton from "../components/backButton";

function ExamManagementDashBoard () {
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

export default ExamManagementDashBoard;