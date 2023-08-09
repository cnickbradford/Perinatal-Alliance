import React, { useState } from "react";
import "./ContactPage.css";
import Footer from "../Header-and-Footer/Footer";
import { Link } from "react-router-dom";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic with formData
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <div className="contact-page-container">
        <div className="contact-page-title-container">
          <h1 className="contact-page-title">Contact Us</h1>
        </div>
        <div className="contact-page-content-container">
          <div className="contact-page-form-container">
            <h4 className="contact-form-header">drop us a line!</h4>
            <form className="contact-form">
              <input
                type="text"
                className="contact-form-input"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
              />

              <br />
              <input
                type="text"
                className="contact-form-input"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email*"
              />
              <br />
              <textarea
                type="text"
                className="contact-form-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
              />

              <br />
              <button className="contact-form-btn">send</button>
            </form>
          </div>
          <div className="contact-page-content-item">
            <div className="contact-page-content-text">
              <span>
                For any other questions or inquiries about our Maternal Fetal
                Medicine Services and Telehealth support for obstetricians,
                please email us at 
                <Link className="contact-link"> support@perinatalalliance.com.</Link>
              </span>
              <h4 className="hours-header"> hours</h4>
              <span className="hours-text">Mon-Fri : 09:00 am - 05:00 pm</span>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ContactPage;
