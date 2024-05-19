import React, { useState, useEffect } from "react";
import axios from "axios";

const ManagersCareer = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch applications from the server
    const fetchApplications = async () => {
      try {
        const response = await axios.get("/api/applications"); // Fetch all volunteer applications
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching volunteer applications:", error);
      }
    };

    fetchApplications();
  }, []);

  // Function to handle accepting a volunteer application
  const handleAccept = async (id) => {
    try {
      await axios.put(`/api/applications/${id}`, { status: "accepted" }); // Update application status to accepted
      setApplications(applications.filter((app) => app._id !== id)); // Remove the accepted application from the list
    } catch (error) {
      console.error("Error accepting volunteer application:", error);
    }
  };

  // Function to handle rejecting a volunteer application
  const handleReject = async (id) => {
    try {
      await axios.put(`/api/applications/${id}`, { status: "rejected" }); // Update application status to rejected
      setApplications(applications.filter((app) => app._id !== id)); // Remove the rejected application from the list
    } catch (error) {
      console.error("Error rejecting volunteer application:", error);
    }
  };

  return (
    <div className="career-container">
      <h1>Manager's Career Dashboard</h1>
      <h2>Manage Volunteer Applications</h2>

      {/* Display volunteer applications */}
      <h3>Volunteer Applications</h3>
      <ul>
        {applications.map((application) => (
          <li key={application._id}>
            {/* Display application details */}
            {application.fname} - {application.age} - {application.interest}
            {/* Buttons to accept or reject the application */}
            <button onClick={() => handleAccept(application._id)}>
              Accept
            </button>
            <button onClick={() => handleReject(application._id)}>
              Reject
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagersCareer;
