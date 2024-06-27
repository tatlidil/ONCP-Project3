import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <h5 className="text-white mx-3">Follow Us</h5>
          <a href="#" className="text-white mx-3 d-flex align-items-center">
            <i className="bi bi-facebook"></i> <span className="ml-2">/oncp-facebook</span>
          </a>
          <a href="#" className="text-white mx-3 d-flex align-items-center">
            <i className="bi bi-twitter"></i> <span className="ml-2">/oncp-twitter</span>
          </a>
          <a href="#" className="text-white mx-3 d-flex align-items-center">
            <i className="bi bi-instagram"></i> <span className="ml-2">/oncp-instagram</span>
          </a>
          <a href="#" className="text-white mx-3 d-flex align-items-center">
            <i className="bi bi-linkedin"></i> <span className="ml-2">/oncp-linkedin</span>
          </a>
          <p className="mb-0 text-white mx-3">&copy; {new Date().getFullYear()} ONCP Pediatrics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
