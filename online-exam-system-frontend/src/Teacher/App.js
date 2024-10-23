// File: teacher/App.js
import React from 'react';
import Login from './Login'; // Adjusted path based on new location
import logo from '../images/logo.png'; 
import Student from './Student'; // Cập nhật đường dẫn để nhập Student

// Adjust the path if necessary
import { Route, Routes } from 'react-router-dom';
function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/exam" element={<Student />} /> {/* Route cho trang thi */}
        </Routes>
      </div>
    );
  }
export default App;
