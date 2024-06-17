import React from 'react';
import { Navigate } from 'react-router-dom';

// Example function to check if user is authenticated
const isAuthenticated = () => {
  // Implement your authentication logic here
  // For example, check if a token is present in localStorage
  return localStorage.getItem('token') !== null;
};

const PrivateRoute = ({ component: Component }) => {
  return isAuthenticated() ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;