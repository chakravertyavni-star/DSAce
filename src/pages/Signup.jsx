import { useState, useEffect } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import "../styles/Auth.css";

function Signup() {

  const navigate = useNavigate();

  /* =========================
     REDIRECT IF LOGGED IN
  ========================= */

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {
      navigate("/subjects");
    }

  }, []);

  /* =========================
     FORM STATE
  ========================= */

  const [formData, setFormData] = useState({

    username: "",
    email: "",
    password: "",

  });

  const [error, setError] = useState("");

  /* =========================
     HANDLE INPUT
  ========================= */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  /* =========================
     HANDLE SUBMIT
  ========================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://cse-visualizer.onrender.com/api/auth/signup",
        formData
      );

      navigate("/login");

    } catch (error) {

      setError(

        error.response?.data?.message ||
        "Signup failed"

      );

    }

  };

  /* =========================
     UI
  ========================= */

  return (

    <div className="auth-page">

      <div className="auth-overlay"></div>
 

 

      {/* CARD */}

      <div className="auth-card">

        <h1>Create Account</h1>

        <p>
          Join Sprouza and start learning.
        </p>

        {/* FORM */}

        <form onSubmit={handleSubmit}>

          {/* USERNAME */}

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          {/* PASSWORD */}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          {/* ERROR */}

          {error && (

            <span className="auth-error">
              {error}
            </span>

          )}

          {/* BUTTON */}

          <button type="submit">
            Sign Up
          </button>

        </form>

        {/* SWITCH */}

        <div className="auth-switch">

          <span>
            Already have an account?
          </span>

          <button
            type="button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        </div>

      </div>

    </div>

  );

}

export default Signup;