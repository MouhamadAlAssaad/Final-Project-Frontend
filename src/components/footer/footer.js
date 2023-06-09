import React from "react";
import "./footer.css";
import { Component } from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialInstagram,
} from "react-icons/ti";
import namelogo from "../../components/images/namelogo.svg";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";


class Footer extends Component {
  state={
   newsletter:{
    email:""
   }
  }
  getEmail=(e)=>{
      this.setState({
        newsletter:{
             email:e.target.value,
        }
     
      })
      console.log(e.target.value)
  }
  postEmail=(e)=>{
    e.preventDefault()
    
    axios
      .post("http://localhost:5000/newsletter", this.state.newsletter)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
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
                <a to="mailto:wardchrayteh@gmail.com" target="_blank">
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
                  <Link
                    to=""
                    target="_blank"
                  >
                    <TiSocialLinkedin />
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    target="_blank"
                  >
                    <TiSocialInstagram />
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
        </footer>
      
      </div>
    );
  }
}
export default Footer;
