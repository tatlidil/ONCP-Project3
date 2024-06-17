import React from 'react';
import './Home.scss'; // Import custom styles for the Home component

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <h2>Office Hours</h2>
          <hr />
          <p>Monday - Friday<br />8am - 5pm</p>
          <p>Phone: 955-679-9888<br />Fax: 955-679-0250</p>
          <h2>Meet Dr. Brown</h2>
          <hr />
          <img
            src="\foto-sushi-6anudmpILw4-unsplash.jpg" 
            alt="Dr. Brown"
            className="img-fluid"
          />
        </div>
        <div className="col-md-9">
          <h1>ONCP Pediatrics</h1>
          <hr />
          <p>
            Charles Brown, M.D. is a Board Certified Pediatrician. He completed his Internship and Residency program at Loma Linda University Medical Center, California. He is a Diplomat of the American Academy of Pediatrics and a Member of the American Medical Association. Dr. Brown has been in Pediatrics for over 25 years, over 20 years locally here in the Sun City, Menifee area.
          </p>
          <p>
            Dr. Brown’s unselfish regard for the welfare of others is what drew him into the field of medicine. He comes from a family of medical professionals. He became a Pediatrician due to his love of working with children. He has a special interest in treating children with Attention Deficit Disorder (ADD). To make each of his patients comfortable and to respond in a kind and considerate manner are essential elements in his patient-physician relationships.
          </p>
          <p>
            Dr. Brown is married and has two children. In his free time, he is very active in his church and works with children in youth groups. He also enjoys gardening, reading, and spending time with his family.
          </p>
          <img
            src="\acton-crawford-8PB_TFEy2XQ-unsplash.jpg" 
            alt="Office"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;