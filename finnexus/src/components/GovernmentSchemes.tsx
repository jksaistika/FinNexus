import React from "react";
import { useNavigate } from "react-router-dom";

const GovernmentSchemes: React.FC = () => {
  const navigate = useNavigate();

  // Scheme Data for all categories
  const schemes = {
    entrepreneurship: [
      { id: 1, name: "Stand Up India Scheme" },
      { id: 2, name: "Pradhan Mantri Mudra Yojana (PMMY)" },
      { id: 3, name: "Mahila Coir Yojana" },
      { id: 4, name: "Trade Related Entrepreneurship Assistance and Development (TREAD)" },
      { id: 5, name: "Support to Training and Employment Program for Women (STEP)" },
      { id: 6, name: "Swarna Jayanti Shahari Rozgar Yojana (SJSRY)" },
      // Add remaining schemes up to 65
    ],
    scholarship: [
      { id: 1, name: "National Scholarship Portal (NSP)" },
      { id: 2, name: "PM Scholarship Scheme" },
      { id: 3, name: "Central Sector Scheme of Scholarships for College and University Students" },
      { id: 4, name: "Post Matric Scholarship for SC Students" },
      { id: 5, name: "Merit-cum-Means Scholarship Scheme" },
      { id: 6, name: "Ishan Uday Scholarship Scheme" },
      // Add remaining schemes up to 65
    ],
    smallscale: [
      { id: 1, name: "Prime Minister’s Employment Generation Programme (PMEGP)" },
      { id: 2, name: "Credit Guarantee Fund Scheme for Micro and Small Enterprises (CGS)" },
      { id: 3, name: "National Manufacturing Competitiveness Programme (NMCP)" },
      { id: 4, name: "Technology Upgradation Fund Scheme (TUFS)" },
      { id: 5, name: "Coir Udyami Yojana (CUY)" },
      { id: 6, name: "Cluster Development Programme (CDP)" },
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
        Government Schemes
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

export default GovernmentSchemes;
