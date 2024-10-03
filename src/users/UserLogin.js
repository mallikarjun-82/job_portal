import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterClick = () => {
    navigate("/registeruser");
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post(
        `http://localhost:8080/userlogin/${encodeURIComponent(
          email
        )}/${encodeURIComponent(password)}`,
        {}, // Send an empty object since we don't need a body
        {
          headers: {
            "Content-Type": "application/json", // Ensure correct content type
          },
        }
      );
      if (response.status === 200) {
        alert("Login successful!");
        // Redirect to user home or dashboard
        navigate("/user");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="/user.jpg" // Updated path to the image in the public folder
                className="img-fluid"
                alt="Sample"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleLogin}>
                {" "}
                {/* Add onSubmit handler */}
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    value={email} // Controlled input
                    onChange={(e) => setEmail(e.target.value)} // Handle input change
                    required
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    value={password} // Controlled input
                    onChange={(e) => setPassword(e.target.value)} // Handle input change
                    required
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <button
                      className="btn btn-link p-0 link-danger"
                      style={{ textDecoration: "none" }}
                      onClick={handleRegisterClick}
                    >
                      Register
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
          
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div> */}
      </section>
    </div>
  );
}
