import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const LoginModal = ({ show, handleClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/auth/login', { email, password });
      const { token } = res.data;
      localStorage.setItem('token', token); // Store the token
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const userName = decodedToken.user.name;
      onSuccess(userName); // Pass the user's name to the onSuccess handler
      handleClose();
      console.log('Login successful');
    } catch (error) {
      console.error('Error logging in', error);
      // Display error message to user
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
