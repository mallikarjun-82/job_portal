import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate
import axios from "axios";

export default function ViewJob() {
  const { id } = useParams(); // Get the job id from URL parameters
  const [job, setJob] = useState(null); // Job details will be stored here
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    // Fetch job details by id from the backend
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/job/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  // Handle Apply Now button click
  const handleApply = () => {
    // Navigate to ApplyJob page with job id
    navigate(`/user/applyjob/${id}`);
  };

  if (!job) {
    return <div>Loading job details...</div>; // Display loading until job data is fetched
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Apply for {job.name}</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{job.name}</h5>
          <p className="card-text">
            <strong>Recruiter:</strong> {job.recruiter}
          </p>
          <p className="card-text">
            <strong>Salary:</strong> ${job.salary}
          </p>
          <p className="card-text">
            <strong>Location:</strong> {job.location}
          </p>
          <p className="card-text">
            <strong>Description:</strong> {job.description}
          </p>
          <button className="btn btn-primary" onClick={handleApply}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
