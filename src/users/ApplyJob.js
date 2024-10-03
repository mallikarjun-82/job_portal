import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

export default function ApplyJob() {
  const { id } = useParams(); // Get the job id from the URL parameters
  const navigate = useNavigate(); // Initialize useNavigate to redirect after form submission

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    age: "",
    job_id: id, // Initialize jobId with the value from URL parameters
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const applicationData = {
        mobile: formData.mobile,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: formData.age, // Include company in jobData
        job: { id: formData.job_id }, // Associate the recruiter by id
      };
      console.log("Submitting application:", formData);

      // Submit the form data to the backend
      await axios.post(`http://localhost:8080/application`, applicationData);
      alert("Application submitted successfully!");

      // Redirect back to the User page after submission
      navigate(`/user`);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application.");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Apply for Job</h2>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="jobId" value={formData.jobId} />{" "}
            {/* Hidden input for job_id */}
            <div className="form-group mb-3">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                className="form-control"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
