import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portal from './components/Portal';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Footer from './components/Footer'; // Ensure Footer is imported
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import SignUpModal from './components/SignUpModal'; // Import SignUpModal component

function App() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleSignUpModalClose = () => {
    setShowSignUpModal(false);
  };

  const handleSignUpModalOpen = () => {
    setShowSignUpModal(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/portal" element={
              <PrivateRoute>
                <Portal />
              </PrivateRoute>
            } />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <SignUpModal show={showSignUpModal} handleClose={handleSignUpModalClose} onSuccess={handleSignUpModalClose} />
        {/* Render SignUpModal component with props for show, handleClose, and onSuccess */}
      </div>
    </Router>
  );
}

export default App;
