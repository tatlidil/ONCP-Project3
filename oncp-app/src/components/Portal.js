import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button, Tabs, Tab } from 'react-bootstrap';
import './Portal.scss'; 
import AppointmentForm from './AppointmentForm';
import LabTestList from './LabTestList';
import PrescriptionList from './PrescriptionList';
import Availability from './Availability';

const Portal = () => {
  const user = useSelector((state) => state.user);
  const [key, setKey] = useState('appointments');
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Patient Portal</h1>
          <hr />
          <p className="text-center">Welcome, {user.name}!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
            <Tab eventKey="appointments" title="Appointments">
              <Button variant="primary" className="mb-3" onClick={handleShow}>
                Make an Appointment
              </Button>
              <ul className="list-group">
                {user.appointments?.map((appointment, index) => (
                  <li key={index} className="list-group-item">
                    {appointment}
                  </li>
                ))}
              </ul>
            </Tab>
            <Tab eventKey="labtests" title="Lab Tests">
              <LabTestList />
            </Tab>
            <Tab eventKey="prescriptions" title="Prescriptions">
              <PrescriptionList />
            </Tab>
            <Tab eventKey="messages" title="Messages">
              <ul className="list-group">
                {user.messages?.map((message, index) => (
                  <li key={index} className="list-group-item">
                    {message}
                  </li>
                ))}
              </ul>
            </Tab>
            <Tab eventKey="availability" title="Availability">
              <Availability availability={user.availability} />
            </Tab>
          </Tabs>
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

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make an Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AppointmentForm doctorId={user.doctorId} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Portal;
