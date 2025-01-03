import React from "react";
import { useNavigate } from "react-router-dom";

const SchemesModule: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        paddingTop: "100px", // Adds extra space at the top to avoid content being hidden
        backgroundColor: "#FFFFFF",
        border: "4px solid #000000",
        borderRadius: "10px",
        maxWidth: "400px",
        margin: "50px auto",
        textAlign: "center",
        position: "relative",
        marginTop: '100px',
      }}
    >
      {/* Add the Image */}
      <img
        src="img18.png" // Replace with the actual path or URL to your image
        alt="Schemes"
        style={{
          width: "70%",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "0px",

        }}
      />

      <h1 style={{ color: "#000000", marginBottom: "30px" }}>Schemes</h1>
      <button
        onClick={() => navigate("/GovernmentSchemes")}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "20px",
          backgroundColor: "#FFFFFF",
          color: "#000000",
          border: "2px solid #000000",
          borderRadius: "5px",
          width: "80%",
          cursor: "pointer",
        }}
      >
        <b>Government Schemes</b>
      </button>
      <button
        onClick={() => navigate("/NGOSchemes")}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "20px",
          backgroundColor: "#FFFFFF",
          color: "#000000",
          border: "2px solid #000000",
          borderRadius: "5px",
          width: "80%",
          cursor: "pointer",
        }}
      >
        <b>NGO Schemes</b>
      </button>
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

export default SchemesModule;
