import React from 'react';
import './Portal.scss'; // Import custom styles for the Portal component

const Portal = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <h1>Patient Portal</h1>
          <hr />
          <p>Welcome to the patient portal. Here you can manage your appointments, view medical records, and communicate with your doctor.</p>
        </div>
      </div>
    </div>
  );
}

export default Portal;