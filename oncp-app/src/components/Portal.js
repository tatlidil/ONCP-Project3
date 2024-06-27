// components/Portal.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages, sendMessage } from '../redux/actions/messageActions';
import AppointmentDatePicker from './AppointmentDatePicker';
import Modal from 'react-modal';
import axios from 'axios'; // Import axios
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

  const handleDateSelect = async (date) => {
    if (date) {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        await axios.post(
          'http://127.0.0.1:5000/api/appointments',
          { date },
          { headers: { 'x-auth-token': token } } // Include token in request headers
        );
        setNotification('Appointment requested successfully!');
        setTimeout(() => {
          setNotification('');
        }, 3000);
      } catch (error) {
        console.error('Error requesting appointment:', error);
        setNotification('Failed to request appointment.');
      }
    }
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
          <h1 className="mb-4">Patient Portal</h1>
          <p className="lead">Welcome {user.firstName}!</p>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <section className="mb-5">
            <h2>Appointments</h2>
            <button
              className="btn btn-primary mb-3 btn-md"
              onClick={() => setModalIsOpen(true)}
              style={{ display: 'block', marginLeft: '0' }}
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
          <section className="mb-5">
            <h2>Lab Tests</h2>
            <button
              className="btn btn-primary mb-3 btn-md"
              onClick={handleCheckLabTests}
              style={{ display: 'block', marginLeft: '0' }}
            >
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
          <section className="mb-5">
            <h2>Prescriptions</h2>
            <button
              className="btn btn-primary mb-3 btn-md"
              onClick={handleCheckPrescriptions}
              style={{ display: 'block', marginLeft: '0' }}
            >
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
          <section className="mb-5">
            <h2>Messages</h2>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="1"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Write a message..."
                style={{ resize: 'none', maxWidth: '500px' }}
              ></textarea>
              <button
                className="btn btn-primary mt-2 btn-md"
                onClick={handleSendMessage}
                style={{ display: 'block', marginLeft: '0', maxWidth: '200px' }}
              >
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
      </Modal>
    </div>
  );
};

export default Portal;
