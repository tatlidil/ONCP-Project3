import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import SignUpModal from './SignUpModal'; 

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();


  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSignUpSuccess = () => {
    handleClose();
    navigate('/portal');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                <a className="nav-link" href="#!" onClick={handleShow}>Portal</a> {/* Use anchor tag to handle click */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SignUpModal show={showModal} handleClose={handleClose} onSuccess={handleSignUpSuccess} /> {/* Pass the success handler */}
    </>
  );
}

export default Navbar;