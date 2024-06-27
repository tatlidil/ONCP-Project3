import React, { useState } from "react";
import "./Contact.scss"; // Import the custom styles
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contactMethod, setContactMethod] = useState('Phone');
  const [comments, setComments] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/contact', {
        name,
        email,
        phone,
        contactMethod,
        comments
      });

      if (response.status === 200) {
        setFormSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
        setComments('');
      } else {
        setError('Failed to submit the form. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit the form. Please try again later.');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <h2 className="text-left">Office Hours</h2>
          <hr />
          <p className="text-left">
            Monday - Friday
            <br />
            8am - 5pm
          </p>
          <p className="text-left">
            Phone: 955-679-9888
            <br />
            Fax: 955-679-0250
          </p>
          <h2 className="text-left">Contact Us</h2>
          <hr />
          <img
            src="/foto-sushi-6anudmpILw4-unsplash.jpg"
            alt="Contact"
            className="img-fluid rounded mb-3"
          />
          <form className="needs-validation" onSubmit={handleFormSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="text-left w-100">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <div className="invalid-feedback">
                Please provide your name.
              </div>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email" className="text-left w-100">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid email.
              </div>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="phone" className="text-left w-100">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="contactMethod" className="text-left w-100">Preferred Contact Method</label>
              <select
                className="form-control"
                id="contactMethod"
                value={contactMethod}
                onChange={(e) => setContactMethod(e.target.value)}
              >
                <option>Phone</option>
                <option>Email</option>
              </select>
            </div>
            
            <div className="form-group mt-3">
              <label htmlFor="comments" className="text-left w-100">Comments</label>
              <textarea
                className="form-control"
                id="comments"
                rows="3"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3 w-100">
              Submit
            </button>
            {formSubmitted && (
              <div className="alert alert-success mt-3" role="alert">
                Your message has been sent successfully!
              </div>
            )}
            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )}
          </form>
        </div>
        <div className="col-md-9">
          <h1 className="text-center">Contact Information</h1>
          <hr />
          <h2 className="text-center">The Staff</h2>
          <img
            src="\staffp3.jpg"
            alt="Staff"
            className="img-fluid small-image mb-3"
          />
          <p className="text-justify">
            If you have any questions, please feel free to contact us. We are
            here to help you and your child. Our office staff is available
            during office hours to assist with scheduling, billing inquiries,
            and any other questions you may have.
          </p>
          <p className="text-justify">
            You can reach us via phone, fax, or email. For general inquiries,
            please use the form below, and we will get back to you as soon as
            possible.
          </p>
          <h2 className="text-center">Our Patients</h2>
          <img
            src="\istockphoto-1388254153-170667a.webp"
            alt="Office"
            className="img-fluid mb-3 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
