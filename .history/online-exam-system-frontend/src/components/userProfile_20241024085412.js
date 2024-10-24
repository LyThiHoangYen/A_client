function UserProfile ({ name, phone, examsCreated }){
    return (
        <div className="text-center mb-8">
        <div className="bg-gray-200 w-32 h-40 mb-4 mx-auto"/>
        <p>Tên: {name}</p>
        <p>SDT: {phone}</p>
        </div>
    );
}

  export default UserProfile;

