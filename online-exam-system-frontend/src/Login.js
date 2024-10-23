// File: src/teacher/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './style.css';
import logo from '../images/logo.png';

const Login = () => {
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleClick = () => {
    navigate('/exam'); // Chuyển hướng đến trang ExamPage
  };

  return (
    <div className="main">
      {/* Logo của trang web */}
      <img
        src={logo}
        alt="Logo"
        className='logo'
      />
      {/* Form đăng nhập */}
      <form>
        {/* Trường nhập tên tài khoản */}
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
        />
        {/* Trường nhập mật khẩu */}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        {/* Container cho nút đăng nhập */}
        <div className="wrap">
          <button type="submit">Login</button>
        </div>
      </form>

      {/* Đường kẻ ngang */}
      <hr />
      {/* Phần footer */}
      <div className="footer">
        {/* Lựa chọn ngôn ngữ */}
        Take an exam? <p className='clickhere' onClick={handleClick}>Click here</p>
      </div>
    </div>
  );
};

export default Login;
