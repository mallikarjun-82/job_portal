import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecruiterHome() {
  const navigate = useNavigate(); // Initialize useNavigate to handle navigation

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Recruiter Dashboard</h2>
      <div className="text-center">
        <button
          className="btn btn-primary mx-3"
          onClick={() => navigate("/recruiter/applications")} // Replace with the actual path to applications
        >
          Applications
        </button>
        <button
          className="btn btn-secondary mx-3"
          onClick={() => navigate("/recruiter/addjob")} // Replace with the actual path to add job
        >
          Add Job
        </button>
      </div>
    </div>
  );
}
