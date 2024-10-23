function InputField ({ type, id, name, placeholder, required = false }) {
    return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full my-5 px-4 py-3 text-lg border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}