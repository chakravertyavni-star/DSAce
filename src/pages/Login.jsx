import { useState, useEffect } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import "../styles/Auth.css";

function Login() {

  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {
      navigate("/subjects/dsa");
    }

  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "https://cse-visualizer.onrender.com/api/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/subjects/dsa");

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Login failed"
      );

    }
  };

  return (

    <div className="auth-page">

      <div className="auth-overlay"></div>

      {/* QUOTE */}
 

      {/* CARD */}

      <div className="auth-card">

        <h1>Welcome Back</h1>

        <p>
          Continue your learning journey.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          {error && (
            <span className="auth-error">
              {error}
            </span>
          )}

          <button type="submit">
            Login
          </button>

        </form>

        {/* SWITCH */}

        <div className="auth-switch">

          <span>
            Don’t have an account?
          </span>

          <button
            type="button"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>

        </div>

      </div>

    </div>

  );
}

export default Login;