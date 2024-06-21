<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import './Navbar.scss'; // Import the custom SCSS
=======
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import SignUpModal from './SignUpModal';
>>>>>>> Stashed changes

const CustomNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [user, setUser] = useState(null);

<<<<<<< Updated upstream
  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleSignUpClose = () => setShowSignUp(false);
  const handleSignUpShow = () => setShowSignUp(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setUser({ name: decodedToken.user.name });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const handleLoginSuccess = (userName) => {
    setUser({ name: userName });
  };
=======
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
>>>>>>> Stashed changes

  const handleSignUpSuccess = () => {
    console.log('User signed up successfully');
    setShowSignUp(false);
  };

  return (
    <>
<<<<<<< Updated upstream
      <Navbar expand="lg" className="custom-navbar">
        <Navbar.Brand href="#home">
          <i className="bi bi-file-medical"></i> ONCP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#portal">Portal</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            {user ? (
              <>
                <Nav.Link href="#welcome">Hi {user.name}!</Nav.Link>
                <Button variant="secondary" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="primary" onClick={handleSignUpShow} className="mr-2">
                  Sign Up
                </Button>
                <Button variant="secondary" onClick={handleLoginShow} className="ml-2">
                  Login
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <LoginModal show={showLogin} handleClose={handleLoginClose} onSuccess={handleLoginSuccess} />
      <SignUpModal show={showSignUp} handleClose={handleSignUpClose} onSuccess={handleSignUpSuccess} />
=======
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
                <a className="nav-link" href="#!" onClick={handleShow}>Portal</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SignUpModal show={showModal} handleClose={handleClose} onSuccess={handleSignUpSuccess} />
>>>>>>> Stashed changes
    </>
  );
};

export default CustomNavbar;
