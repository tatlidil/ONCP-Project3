<<<<<<< Updated upstream
// src/components/Portal.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppointmentForm from './AppointmentForm';
import LabTestList from './LabTestList';
import PrescriptionList from './PrescriptionList';
import Availability from './Availability';

const Portal = () => {
  const [appointments, setAppointments] = useState([]);
  const [labTests, setLabTests] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };

      try {
        const [appointmentsRes, labTestsRes, prescriptionsRes, availabilityRes] = await Promise.all([
          axios.get('http://127.0.0.1:5000/api/appointments', config),
          axios.get('http://127.0.0.1:5000/api/labtests', config),
          axios.get('http://127.0.0.1:5000/api/prescriptions', config),
          axios.get('http://127.0.0.1:5000/api/availability', config),
        ]);

        setAppointments(appointmentsRes.data);
        setLabTests(labTestsRes.data);
        setPrescriptions(prescriptionsRes.data);
        setAvailability(availabilityRes.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Patient Portal</h1>
      <hr />
      <h2>Appointments</h2>
      <AppointmentForm appointments={appointments} />
      <hr />
      <h2>Lab Tests</h2>
      <LabTestList labTests={labTests} />
      <hr />
      <h2>Prescriptions</h2>
      <PrescriptionList prescriptions={prescriptions} />
      <hr />
      <h2>Doctor's Availability</h2>
      <Availability availability={availability} />
=======
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
>>>>>>> Stashed changes
    </div>
  );
};

export default Portal;
