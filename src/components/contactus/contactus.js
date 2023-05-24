import React, { useState } from "react";
import axios from "axios";
import "./contactus.css";

const Contact = () => {
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   await axios
      .post(`${process.env.REACT_APP_URL}/inbox`, {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        message: data.message,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setData({
            email: "",
            firstName: "",
            lastName: "",
            message: "",
          });
        } else {
          console.log(response);
          alert("Invalid Credentials");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <section className="contactUs">
        <div className="contact-container">
          <div className="row input-container">
            <form onSubmit={handleSubmit}>
              <div className="col-xs-12">
                <div className="styled-input wide">
                  <label className="email-label">Email</label>
                  <input
                    className="email-input"
                    type="text"
                    name="email"
                    required
                    value={data.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="styled-input">
                  <label className="firstname-label">First Name</label>
                  <input
                    className="firstname-input"
                    type="text"
                    required
                    name="firstName"
                    value={data.firstName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="styled-input" >
                  <label className="lastname-label">Last Name</label>
                  <input
                    className="lastname-input"
                    type="text"
                    name="lastName"
                    required
                    value={data.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-xs-12">
                <div className="styled-input wide">
                  <label className="message-label">Message</label>
                  <textarea
                    className="message-textarea"
                    required
                    name="message"
                    value={data.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <div className="btn-cont">
                <button type="submit" className="btn-lrg submit-btnnnn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
