import React from "react";

const Submit = ({ data }) => {
  return (
    <div className="submit-container">
      <div className="submit-card">
        <h1>🎉 Welcome, {data.name || "Guest"}! 🎉</h1>
        <p>Your submission was successful.</p>
        <p>We're excited to have you onboard!</p>

        <div className="submit-info">
          <h3>📌 Your Details:</h3>
          <p><strong>Age:</strong> {data.age}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Interests:</strong> {data.interests.join(", ")}</p>
          <p><strong>Theme:</strong> {data.theme}</p>
        </div>

        <button className="submit-btn" onClick={() => window.location.reload()}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Submit;
