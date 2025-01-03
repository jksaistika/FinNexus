import React from "react";
import { useNavigate } from "react-router-dom";

const ScheduleTable = () => {
  const navigate = useNavigate();

  // Sample data containing 10 duplicate entries
  const scheduleData = [
    { id: 1, name: "John Doe", phone: "1234567890", time: "08:00am - 10:00am" },
    { id: 2, name: "John Doe", phone: "1234567890", time: "08:00am - 10:00am" },
    { id: 3, name: "Jane Smith", phone: "0987654321", time: "10:00am - 12:00pm" },
    { id: 4, name: "Jane Smith", phone: "0987654321", time: "10:00am - 12:00pm" },
    { id: 5, name: "Michael Brown", phone: "5678901234", time: "01:00pm - 03:00pm" },
    { id: 6, name: "Michael Brown", phone: "5678901234", time: "01:00pm - 03:00pm" },
    { id: 7, name: "Emily Davis", phone: "4321098765", time: "03:00pm - 05:00pm" },
    { id: 8, name: "Emily Davis", phone: "4321098765", time: "03:00pm - 05:00pm" },
    { id: 9, name: "Robert Wilson", phone: "7890123456", time: "05:00pm - 07:00pm" },
    { id: 10, name: "Robert Wilson", phone: "7890123456", time: "05:00pm - 07:00pm" },
  ];

  return (
    <div>
      <table style={{ margin: "20px auto", width: "80%", borderCollapse: "collapse", textAlign: "left" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "10px", backgroundColor: "#f8f8f8" }}>S.No</th>
            <th style={{ border: "1px solid #ccc", padding: "10px", backgroundColor: "#f8f8f8" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "10px", backgroundColor: "#f8f8f8" }}>Phone No</th>
            <th style={{ border: "1px solid #ccc", padding: "10px", backgroundColor: "#f8f8f8" }}>Schedule Time</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((entry, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{entry.id}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{entry.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{entry.phone}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => navigate("/")}
        style={{
          margin: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default ScheduleTable;
