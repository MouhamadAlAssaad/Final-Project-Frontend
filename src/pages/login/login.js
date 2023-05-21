import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Assad from "../../components/images/Assad png -42 - Copy.png";
import "./login.css";
import axios from "axios";
import Cookies from 'js-cookie'

export default function Login() {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const value = e.target.value;
    setLoginData({ ...loginData, [e.target.name]: value }); 
    console.log(loginData)
  };

  const login = async(e) => {
    e.preventDefault();
    const loginForm = {
      email: loginData.email,
      password: loginData.password,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/admin/login`,
        loginForm
      );
      console.log(response);
      if (response.status === 200) {
        const oneWeek = 7 * 24 * 60 * 60 * 1000;
        Cookies.set('admin-token', response.data.token, {expires: oneWeek})
      } else {
        console.log(response.data.message)
      }
      navigate('/dashboard-home')
    } catch (e) {
      console.log(e.response.message);
      setError(e.response.data.message)
    }
  };

  return (
    <div className="login-container">
      <section className="login-content">
        <div className="login-image">
          <img src={Assad} alt="foto" width="100%" height="100%" />
        </div>
        <form className="login_form" onSubmit={login}>
          <div class="login">
            <h2>Login</h2>
            <div className="login-error" onClick={() => setError('')}>{error}</div>

            <input
              type="text"
              name="email"
              placeholder="email"
              required="required"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required="required"
              onChange={handleChange}
            />
            <button type="submit" class="btn btn-primary btn-block btn-large">
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
