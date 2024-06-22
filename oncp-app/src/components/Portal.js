import React from 'react';
import { useSelector } from 'react-redux';
import './Portal.scss'; // Import custom styles for the Portal component

const Portal = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <h1>Patient Portal</h1>
          <hr />
          <p>Welcome, {user.name}!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <section className="mb-4">
            <h2>Appointments</h2>
            <button className="btn btn-primary mb-3">Make an Appointment</button>
            <ul className="list-group">
              {user.appointments.map((appointment, index) => (
                <li key={index} className="list-group-item">
                  {appointment}
                </li>
              ))}
            </ul>
          </section>
          <section className="mb-4">
            <h2>Lab Tests</h2>
            <ul className="list-group">
              {user.labTests.map((test, index) => (
                <li key={index} className="list-group-item">
                  {test}
                </li>
              ))}
            </ul>
          </section>
          <section className="mb-4">
            <h2>Prescriptions</h2>
            <ul className="list-group">
              {user.prescriptions.map((prescription, index) => (
                <li key={index} className="list-group-item">
                  {prescription}
                </li>
              ))}
            </ul>
          </section>
          <section className="mb-4">
            <h2>Messages</h2>
            <ul className="list-group">
              {user.messages.map((message, index) => (
                <li key={index} className="list-group-item">
                  {message}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={user.imageUrl} className="card-img-top" alt="User" />
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">Welcome to your patient portal. You can manage your health information here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
