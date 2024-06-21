import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

<<<<<<< Updated upstream
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

const PrivateRoute = ({ component: Component }) => {
  return isAuthenticated() ? <Component /> : <Navigate to="/" />;
=======
const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" />;
>>>>>>> Stashed changes
};

export default PrivateRoute;
