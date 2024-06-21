import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portal from './components/Portal';
import Contact from './components/Contact';
import CustomNavbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
<<<<<<< Updated upstream
=======
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
<<<<<<< Updated upstream
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portal" element={<PrivateRoute component={Portal} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
=======
      <div className="App">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/portal" element={
              <PrivateRoute>
                <Portal />
              </PrivateRoute>
            } />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
>>>>>>> Stashed changes
    </Router>
  );
}

export default App;
