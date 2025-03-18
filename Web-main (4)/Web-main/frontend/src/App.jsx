import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KezdoLap from './KezdoLap/KezdoLap';
import LoginSignup from './LoginSignup/LoginSignup';
import ForgotPassword from './ForgotPassword/ForgotPassword.jsx';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<KezdoLap />} />
              <Route path="/register" element={<LoginSignup />} />
              <Route path="/login" element={<LoginSignup />} />  
              <Route path="/web.html" element={<h1>Web oldal</h1>} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
      </Router>
  );
}

export default App
