import React from 'react';
import './Contact.scss'; // Import the custom styles

const Contact = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <h2>Office Hours</h2>
          <hr />
          <p>Monday - Friday<br />8am - 5pm</p>
          <p>Phone: 955-679-9888<br />Fax: 955-679-0250</p>
          <h2>Contact Us</h2>
          <hr />
          <img
            src="/foto-sushi-6anudmpILw4-unsplash.jpg"
            alt="Contact"
            className="img-fluid"
          />
          <form className="mt-3">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="phone">Phone</label>
              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="contactMethod">Preferred Contact Method</label>
              <select className="form-control" id="contactMethod">
                <option>Phone</option>
                <option>Email</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label>Contact Preference</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="contactPreference" id="contactPhone" value="phone" />
                <label className="form-check-label" htmlFor="contactPhone">
                  Phone
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="contactPreference" id="contactEmail" value="email" />
                <label className="form-check-label" htmlFor="contactEmail">
                  Email
                </label>
              </div>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="comments">Comments</label>
              <textarea className="form-control" id="comments" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
        <div className="col-md-9">
          <h1>Contact Information</h1>
          <hr />
          <p> Our Staff</p>
          <img
            src="\staffp3.jpg"
            alt="Staff"
            className="img-fluid small-image"
          />
          
          <p>
            If you have any questions, please feel free to contact us. We are here to help you and your child. Our office staff is available during office hours to assist with scheduling, billing inquiries, and any other questions you may have.
          </p>
          <p>
            You can reach us via phone, fax, or email. For general inquiries, please use the form below, and we will get back to you as soon as possible.
          </p>
          <img
            src="\cdc-d5NFf1SLguY-unsplash.jpg"
            alt="Office"
            className="img-fluid mb-3"
          />
          
        </div>
      </div>
    </div>
  );
}

export default Contact;