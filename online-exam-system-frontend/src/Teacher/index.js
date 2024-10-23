// File: src/teacher/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css'; // This will work if style.css is in the same folder
import App from './App'; // This should be correct if App.js is in the same folder
import './teacher/style.css'; // Đảm bảo đúng đường dẫn nếu sử dụng style từ thư mục teacher

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
        <App />
    </Router>
    
  </React.StrictMode>
);