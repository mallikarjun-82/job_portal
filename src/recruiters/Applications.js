import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      const recruiterId = localStorage.getItem("id"); // Retrieve recruiter ID from localStorage

      if (!recruiterId) {
        console.log(recruiterId);
        setError("Recruiter not logged in");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:8080/applications/${recruiterId}`
        ); // Your API endpoint

        setApplications(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch applications");
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) {
    return <div>Loading applications...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Applications for Your Jobs</h2>
      {applications.length === 0 ? (
        <div className="alert alert-info">
          No applications found for your jobs.
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Applicant Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Age</th>
              <th>Job Title</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={application.id}>
                <td>
                  {application.firstName} {application.lastName}
                </td>
                <td>{application.email}</td>
                <td>{application.mobile}</td>
                <td>{application.age}</td>
                {/* <td>{application.job.name}</td> Display job name */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
