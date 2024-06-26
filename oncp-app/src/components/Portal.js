import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages, sendMessage } from '../redux/actions/messageActions';
import AppointmentDatePicker from './AppointmentDatePicker';
import Modal from 'react-modal';
import './Portal.scss';

Modal.setAppElement('#root');

const Portal = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const messages = useSelector((state) => state.message.messages);
  const [messageText, setMessageText] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [labTestsChecked, setLabTestsChecked] = useState(false);
  const [prescriptionsChecked, setPrescriptionsChecked] = useState(false);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  const handleSendMessage = () => {
    dispatch(sendMessage(messageText));
    setMessageText('');
    setNotification('Message sent successfully!');
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const handleDateSelect = (date) => {
    console.log('Selected date:', date);
    setModalIsOpen(false);
  };

  const handleCheckLabTests = () => {
    setLabTestsChecked(true);
  };

  const handleCheckPrescriptions = () => {
    setPrescriptionsChecked(true);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>Patient Portal</h1>
          <hr />
          <p>Welcome, {user.firstName}!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <section className="section">
            <h2>Appointments</h2>
            <button
              className="btn btn-primary mb-3"
              onClick={() => setModalIsOpen(true)}
            >
              Make an Appointment
            </button>
            <ul className="list-group">
              {user.appointments.map((appointment, index) => (
                <li key={index} className="list-group-item">
                  {appointment}
                </li>
              ))}
            </ul>
          </section>
          <section className="section">
            <h2>Lab Tests</h2>
            <button className="btn btn-primary mb-3" onClick={handleCheckLabTests}>
              Check Lab Tests
            </button>
            {labTestsChecked && user.labTests.length === 0 && (
              <p>No lab tests available</p>
            )}
            <ul className="list-group">
              {user.labTests.map((test, index) => (
                <li key={index} className="list-group-item">
                  {test}
                </li>
              ))}
            </ul>
          </section>
          <section className="section">
            <h2>Prescriptions</h2>
            <button className="btn btn-primary mb-3" onClick={handleCheckPrescriptions}>
              Check Prescriptions
            </button>
            {prescriptionsChecked && user.prescriptions.length === 0 && (
              <p>No prescriptions available</p>
            )}
            <ul className="list-group">
              {user.prescriptions.map((prescription, index) => (
                <li key={index} className="list-group-item">
                  {prescription}
                </li>
              ))}
            </ul>
          </section>
          <section className="section">
            <h2>Messages</h2>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="3"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Write a message..."
              ></textarea>
              <button className="btn btn-primary mt-2" onClick={handleSendMessage}>
                Send Message
              </button>
            </div>
            {notification && (
              <div className="alert alert-success" role="alert">
                {notification}
              </div>
            )}
            <ul className="list-group">
              {messages.map((message, index) => (
                <li key={index} className="list-group-item">
                  {message.text}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="col-md-4 d-flex flex-column align-items-center">
          <div className="card mb-4">
            <img src={user.imageUrl || '/istockphoto-1463348254-1024x1024.jpg'} className="card-img-top" alt="User" />
            <div className="card-body text-center">
              <h5 className="card-title">{user.firstName}</h5>
              <p className="card-text">
                Welcome to your patient portal. You can manage your health information here.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Select Appointment Date"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h2>Select Appointment Date</h2>
        <AppointmentDatePicker onDateSelect={handleDateSelect} />
        <button className="btn btn-secondary mt-3" onClick={() => setModalIsOpen(false)}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Portal;