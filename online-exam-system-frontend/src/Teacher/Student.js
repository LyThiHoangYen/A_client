// File: src/teacher/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './style.css';
import logo1 from '../images/logo2.png';

const Login = () => {
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleClick = () => {
    navigate('/exam'); // Chuyển hướng đến trang ExamPage
  };

  return (
    <div className="main">
      {/* Logo của trang web */}
      <img
        src={logo1}
        alt="Logo1"
        className='logo1'
      />
      {/* Form đăng nhập */}
      <form>
        {/* Trường nhập tên tài khoản */}
        <input
          type="text"
          id="username"
          name="username"
          placeholder="ID"
          required
        />
        {/* Trường nhập mật khẩu */}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Passcode"
          required
        />
        {/* Container cho nút đăng nhập */}
        <div className="wrap">
          <button type="submit">Start</button>
        </div>
      </form>


    </div>
  );
};

export default Login;
