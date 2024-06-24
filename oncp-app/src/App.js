import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Portal from './components/Portal';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import SignUpModal from './components/SignUpModal'; // Ensure SignUpModal is imported
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

// PrivateRoute component to handle protected routes
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');

  return token ? children : <Navigate to="/" state={{ from: location }} />;
};

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [content, setContent] = useState('signin');

  const handleSignUpClose = () => setShowSignUp(false);
  const handleSignUpShow = () => {
    setContent('signup');
    setShowSignUp(true);
  };

  const handleSignInShow = () => {
    setContent('signin');
    setShowSignUp(true);
  };

  const handlePortalAccess = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      handleSignInShow();
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSignUp={handleSignUpShow} onSignIn={handleSignInShow} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/portal"
              element={
                <PrivateRoute>
                  <Portal />
                </PrivateRoute>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <SignUpModal show={showSignUp} handleClose={handleSignUpClose} content={content} />
      </div>
    </Router>
  );
}

export default App;
