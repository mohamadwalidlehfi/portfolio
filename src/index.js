// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // هنا يتم استيراد ملف Tailwind CSS
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // إذا كنت تستخدم التوجيه

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router> {/* تغليف التطبيق بمكون Router */}
      <App />
    </Router>
  </React.StrictMode>
);