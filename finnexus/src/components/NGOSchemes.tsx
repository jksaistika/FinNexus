import React from "react";
import { useNavigate } from "react-router-dom";

const NGOSchemes: React.FC = () => {
  const navigate = useNavigate();

  // Scheme Data for all categories
  const schemes = {
    entrepreneurship: [
      { id: 1, name: "Women Empowerment Program" },
      { id: 2, name: "Self-Help Group Programs" },
      { id: 3, name: "Micro-Enterprise Development" },
      { id: 4, name: "Skill Development for Women" },
      { id: 5, name: "Rural Women Development" },
      { id: 6, name: "Livelihood Support Schemes" },
      // Add remaining schemes up to 65
    ],
    scholarship: [
      { id: 1, name: "Scholarship for Minority Students" },
      { id: 2, name: "NGO Scholarship for Meritorious Students" },
      { id: 3, name: "Education Assistance Program" },
      { id: 4, name: "Scholarship for Differently-abled Students" },
      { id: 5, name: "NGO Educational Loan Assistance" },
      { id: 6, name: "Scholarship for Underprivileged Students" },
      // Add remaining schemes up to 65
    ],
    smallscale: [
      { id: 1, name: "Small Scale Business Support Program" },
      { id: 2, name: "NGO Assistance for Small Enterprises" },
      { id: 3, name: "Microfinance for Small Business" },
      { id: 4, name: "NGO's Rural Enterprise Development" },
      { id: 5, name: "Financial Support for Women Entrepreneurs" },
      { id: 6, name: "NGO Empowerment for Small Scale Businesses" },
      // Add remaining schemes up to 65
    ],
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #000000",
        borderRadius: "10px",
        maxWidth: "1000px",
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#000000", marginBottom: "30px" }}>
        NGO Schemes
      </h1>

      {/* Entrepreneurship Schemes Table */}
      <h2>Entrepreneurship Schemes for Women</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "30px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
                textAlign: "left",
              }}
            >
              Scheme ID
            </th>
            <th
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
                textAlign: "left",
              }}
            >
              Scheme Name
            </th>
          </tr>
        </thead>
        <tbody>
          {schemes.entrepreneurship.map((scheme) => (
            <tr key={scheme.id}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {scheme.id}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {scheme.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Scholarship Schemes Table */}
      <h2>Scholarship Schemes for Students</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "30px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
                textAlign: "left",
              }}
            >
              Scheme ID
            </th>
            <th
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
                textAlign: "left",
              }}
            >
              Scheme Name
            </th>
          </tr>
        </thead>
        <tbody>
          {schemes.scholarship.map((scheme) => (
            <tr key={scheme.id}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {scheme.id}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {scheme.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Small Scale Schemes Table */}
      <h2>Small Scale Business Schemes</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "30px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
                textAlign: "left",
              }}
            >
              Scheme ID
            </th>
            <th
              style={{
                padding: "8px",
                border: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
                textAlign: "left",
              }}
            >
              Scheme Name
            </th>
          </tr>
        </thead>
        <tbody>
          {schemes.smallscale.map((scheme) => (
            <tr key={scheme.id}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {scheme.id}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {scheme.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // Navigate to the previous page
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Back
      </button>
    </div>
  );
};

export default NGOSchemes;
