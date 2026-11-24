import React from 'react';

function AboutUs({ setCurrentPage }) {
  return (
    <div className="about-container">
      <div className="overlay"></div>
      <div className="about-content">
        <div className="badge-pill">🌿 Digital Agronomy for Bangladesh</div>
        <h1>
          About the <span className="highlight-green">AgroBD</span> Initiative
        </h1>
        <p className="about-main-text">
          Bridging the structural gap between national agricultural laboratory
          research and grassroots farming plots through standardized digital decision support.
        </p>

        <div className="about-bullets">
          <span>• Better information</span>
          <span>• Healthier Crops</span>
          <span>• Prosperous Farmers</span>
        </div>

        <p className="about-sub-text">
          <span className="cyan-text">Your trusted platform for agriculture information</span> crop guidance,
          <br />
          disease management and more.
        </p>

        <button className="pill-btn" onClick={() => setCurrentPage('home')}>
          Home
        </button>
      </div>
    </div>
  );
}

export default AboutUs;