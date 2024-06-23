import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import SignUpModal from './SignUpModal';
import SignUpForm from './SignUpForm';

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const handleShow = (content) => {
    setShowModal(true);
    setModalContent(content);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">ONCP</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={() => handleShow('signin')}>Portal</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={() => handleShow('signup')}>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SignUpModal show={showModal} handleClose={handleClose} content={modalContent} />
    </>
  );
};

export default CustomNavbar;

