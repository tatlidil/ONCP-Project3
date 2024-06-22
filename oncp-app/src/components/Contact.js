import React, { useState } from "react";
import "./Contact.scss"; // Import the custom styles
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contactMethod, setContactMethod] = useState('Phone');
  const [contactPreference, setContactPreference] = useState('phone');
  const [comments, setComments] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Example: Send form data to backend server
      const response = await axios.post('http://localhost:5000/api/contact', {
        name,
        email,
        phone,
        contactMethod,
        comments
      });

      // Assuming backend responds with a success message
      if (response.status === 200) {
        setFormSubmitted(true);
        // Optionally clear form fields after successful submission
        setName('');
        setEmail('');
        setPhone('');
        setComments('');
        // You can also reset other state variables as needed
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
          <h2>Office Hours</h2>
          <hr />
          <p>
            Monday - Friday
            <br />
            8am - 5pm
          </p>
          <p>
            Phone: 955-679-9888
            <br />
            Fax: 955-679-0250
          </p>
          <h2>Contact Us</h2>
          <hr />
          <img
            src="/foto-sushi-6anudmpILw4-unsplash.jpg"
            alt="Contact"
            className="img-fluid"
          />
          <form className="mt-3" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="contactMethod">Preferred Contact Method</label>
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
              <label>Contact Preference</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="contactPreference"
                  id="contactPhone"
                  value="phone"
                  checked={contactPreference === 'phone'}
                  onChange={() => setContactPreference('phone')}
                />
                <label className="form-check-label" htmlFor="contactPhone">
                  Phone
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="contactPreference"
                  id="contactEmail"
                  value="email"
                  checked={contactPreference === 'email'}
                  onChange={() => setContactPreference('email')}
                />
                <label className="form-check-label" htmlFor="contactEmail">
                  Email
                </label>
              </div>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="comments">Comments</label>
              <textarea
                className="form-control"
                id="comments"
                rows="3"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
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
          <h1>Contact Information</h1>
          <hr />
          <h2> The Staff</h2>
          <img
            src="\staffp3.jpg"
            alt="Staff"
            className="img-fluid small-image"
          />

          <p>
            If you have any questions, please feel free to contact us. We are
            here to help you and your child. Our office staff is available
            during office hours to assist with scheduling, billing inquiries,
            and any other questions you may have.
          </p>
          <p>
            You can reach us via phone, fax, or email. For general inquiries,
            please use the form below, and we will get back to you as soon as
            possible.
          </p>
          <h2> Our Patients</h2>
          <img
            src="\istockphoto-1388254153-170667a.webp"
            alt="Office"
            className="img-fluid mb-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
