import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';  // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const SignUpModal = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< Updated upstream
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleSignUp = async () => {
    try {
      await axios.post('http://127.0.0.1:5000/api/auth/signup', { email, password, fullName, birthDate });
      onSuccess(); // Call the onSuccess handler
      handleClose();
=======
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post('/api/auth/signup', { email, password });
      const userData = response.data; // Assuming the response contains user data

      dispatch(login(userData));
      localStorage.setItem('token', 'example_token'); // Set token in localStorage
      handleClose();
      navigate('/portal'); // Navigate to the portal page
>>>>>>> Stashed changes
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicBirthDate">
            <Form.Label>Birth Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter birth date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUpModal;
