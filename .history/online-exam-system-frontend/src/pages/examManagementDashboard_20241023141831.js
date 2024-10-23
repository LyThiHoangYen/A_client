import Header from "../components/header";
import ResultsTable from "../components/resultsTable";
import Button from "../components/Button";

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
        <Button {/>
      </div>
    );
  };

export default ExamManagementDashBoard;