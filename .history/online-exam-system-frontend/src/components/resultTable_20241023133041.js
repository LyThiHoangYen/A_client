import
function ResultsTable ({ students }) { 
    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
        <table className="w-full text-left">
            <thead>
            <tr>
                <th className="border-b-2 p-2">No</th>
                <th className="border-b-2 p-2">Name</th>
                <th className="border-b-2 p-2">Result</th>
            </tr>
            </thead>
            <tbody>
            {students.map((student, index) => (
                <StudentRow
                key={index + 1}
                number={index + 1}
                name={student.name}
                result={student.result}
                />
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default ResultsTable;
  