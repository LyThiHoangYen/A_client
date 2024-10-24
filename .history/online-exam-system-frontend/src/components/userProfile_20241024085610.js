function UserProfile ({ name, phone, examsCreated, birthDate, studentId }){
    return (
        <div className="text-center mb-8">
        <div className="bg-gray-200 w-32 h-40 mb-4 mx-auto"/>
        <p>Tên: {name}</p>
        <p>SDT: {phone}</p>
        <p>Ngày sinh: {birthDate}</p>
        <p>Mã sinh viên: {studentId}</p>
        <p>Số bài thi đã tạo: {examsCreated}</p>
        </div>
    );
}

  export default UserProfile;
