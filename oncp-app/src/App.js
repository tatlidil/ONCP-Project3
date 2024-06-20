import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portal from './components/Portal';
import Contact from './components/Contact';
import CustomNavbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portal" element={<PrivateRoute component={Portal} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
