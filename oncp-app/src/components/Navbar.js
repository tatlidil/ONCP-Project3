import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import './Navbar.scss'; // Import the custom SCSS

const CustomNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [user, setUser] = useState(null);

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

  const handleSignUpSuccess = () => {
    console.log('User signed up successfully');
    setShowSignUp(false);
  };

  return (
    <>
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
    </>
  );
};

export default CustomNavbar;
