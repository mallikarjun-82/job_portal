import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

export default function UserHome() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch the available jobs from the server
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = (jobId) => {
    // Navigate to JobApply page with the jobId as a parameter
    navigate(`/user/job/${jobId}`);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Available Jobs</h2>
      <div className="row">
        {jobs.map((job) => (
          <div className="col-md-4 mb-4" key={job.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://via.placeholder.com/150"
                alt="" // Leave the alt attribute empty if the image is decorative
              />
              <div className="card-body">
                <h5 className="card-title">{job.name}</h5>
                <p className="card-text">
                  {job.description
                    ? `${job.description.substring(0, 100)}...`
                    : "No description available."}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleApply(job.id)} // Navigate to JobApply page
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
