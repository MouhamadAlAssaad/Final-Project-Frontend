import React, { useState } from "react";
import "./footer.css";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialInstagram,
} from "react-icons/ti";
import namelogo from "../../components/images/namelogo.svg";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Footer = () => {
  const location = useLocation().pathname;
  const [newsletter, setNewsletter] = useState({ email: "" });

  if (
    location === "/dashboard-home" ||
    location === "/dashboard-Patient" ||
    location === "/dashboard-Admin" ||
    location === "/dashboard-Treatment" ||
    location === "/dashboard-Newborn" ||
    location === "/dashboard-Expenses" ||
    location === "/dashboard-Income" ||
    location === "/dashboard-Appointment" ||
    location === "/dashboard-Inbox"
  )
    return null; // Return null when the route is "/dashboard"

  const getEmail = (e) => {
    setNewsletter({
      email: e.target.value,
    });
    console.log(e.target.value);
  };

  const postEmail = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/newsletter", newsletter)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="footer-backlog">
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <img src={namelogo} alt="Logo" />
          </div>
          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <p>
              <Link to="">
                {" "}
                <FaMapMarkerAlt color="#e0afa0" />
              </Link>{" "}
              Akkar/Lebanon
            </p>
            <p>
              <a href="mailto:wardchrayteh@gmail.com" target="_blank">
                <FaEnvelope size={20} color="#e0afa0" />{" "}
              </a>
              wardchrayteh@gmail.com
            </p>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <Link to="" target="_blank">
                  <TiSocialFacebook />
                </Link>
              </li>
              <li>
                <Link to="" target="_blank">
                  <TiSocialLinkedin />
                </Link>
              </li>
              <li>
                <Link to="" target="_blank">
                  <TiSocialInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
