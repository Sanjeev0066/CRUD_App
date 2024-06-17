import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function HomePage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Function to fetch data from server using Axios
    const fetchStudents = async () => {
      try {
        const url = "http://localhost:8000/api/getAll";
        const response = await axios.get(url);

        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error.message);
        // Handle error as needed (show error message, retry logic, etc.)
      }
    };

    // Call the fetchStudents function when component mounts
    fetchStudents();
  }, []);

  return (
    <div>
      <div className="navigation-container">
        <div className="navigation-block">
          <Link to="/">
            <button>
              <div>Home</div>
            </button>
          </Link>
        </div>
        <div className="navigation-block">
          <Link to="/add">
            <button>
              <div>Add</div>
            </button>
          </Link>
        </div>
        <div className="navigation-block">
          <Link to="/update">
            <button>
              <div>Update</div>
            </button>
          </Link>
        </div>
        <div className="navigation-block">
          <Link to="/delete">
            <button>
              <div>Delete</div>
            </button>
          </Link>
        </div>
      </div>
      <div>
        <h2>Students</h2>
        <table id="studentTable">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Fees</th>
              <th>College</th>
              <th>Course</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.fees}</td>
                <td>{student.college}</td>
                <td>{student.course}</td>
                <td>{student._id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
