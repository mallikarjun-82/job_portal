// import React, { useEffect, useState } from "react";

// import axios from "axios";

// export default function Home() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:8080/users");
//     setUsers(result.data);
//   };

//   return (
//     <div>
//       <table class="table border shadow">
//         <thead>
//           <tr>
//             <th scope="col">id</th>
//             <th scope="col">Mobile</th>
//             <th scope="col">First Name</th>
//             <th scope="col">Last Name</th>
//             <th scope="col">email</th>
//             <th scope="col">age</th>
//             <th scope="col">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => {
//             return (
//               <tr key={index}>
//                 <th scope="row">{index + 1}</th>
//                 <td>{user.mobile}</td>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.email}</td>
//                 <td>{user.age}</td>
//                 <td>
//                   <button className="btn btn-primary mx-2">View</button>
//                   <button className="btn btn-outline-primary mx-2">Edit</button>
//                   <button className="btn btn-danger mx-2">Delete</button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const navigate = useNavigate();

  // Function to handle navigation when buttons are clicked
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Inline styles for enhanced design with the img.jpg background image
  const containerStyle = {
    backgroundImage: "url('/wall.jpg')",    // Updated to img.jpg image
    backgroundSize: "cover",                // Ensures the image covers the entire container
    backgroundPosition: "center",           // Centers the background image
    backgroundRepeat: "no-repeat",          // Prevents the image from repeating
    backgroundAttachment: "fixed",          // Keeps the background in place during scrolling
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Adds shadow to text for readability
  };

  // Taskbar with transparent background
  const navbarStyle = {
    backgroundColor: "transparent",          // Set background to transparent
    padding: "10px 20px",
    position: "fixed",
    top: 0,
    width: "100%",
  };

  const buttonContainerStyle = {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  };

  // Make buttons transparent
  const buttonStyle = {
    fontWeight: "bold",
    borderRadius: "20px",
    padding: "10px 20px",
    backgroundColor: "transparent",         // Set background to transparent
    border: "2px solid #fff",               // Add a border for the button
    color: "#fff",                          // White text color
    transition: "0.3s",                     // Add transition for hover effect
  };

  // Set the heading text color to white
  const headingStyle = {
    fontSize: "3rem",
    margin: "20px auto",
    color: "#fff",                         // Set font color to white
    textAlign: "center",
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
  };

  // Set the paragraph text color to white
  const paragraphStyle = {
    fontSize: "1.2rem",
    marginBottom: "40px",
    color: "#fff",                         // Text color set to white
  };

  return (
    <div style={containerStyle}>
      <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ fontWeight: "bold", color: "#fff" }}>
            Job Portal
          </a>
        </div>
      </nav>

      {/* Updated heading position to the top center */}
      <h1 style={headingStyle}>Welcome to the Job Portal</h1>

      {/* Main content for the home page */}
      <div className="container text-center mt-5">
        <p style={paragraphStyle}>Select a login option below to continue.</p>

        {/* Buttons placed below the main heading */}
        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onClick={() => handleNavigation("/admin")}
          >
            Admin Login
          </button>
          <button
            style={buttonStyle}
            onClick={() => handleNavigation("/loginuser")}
          >
            User Login
          </button>
          <button
            style={buttonStyle}
            onClick={() => handleNavigation("/loginrecruiter")}
          >
            Recruiter Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
