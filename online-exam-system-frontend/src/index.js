// File: src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Teacher/App'; // Đường dẫn đúng đến App.js trong thư mục teacher
import './Teacher/style.css'; // Nếu bạn muốn sử dụng style.css từ thư mục teacher
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
        <App />
    </Router>
    
  </React.StrictMode>
);