import React, { useState } from 'react';

function Home({ setCurrentPage, setSearchQuery }) {
  const [inputText, setInputText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const query = inputText.trim();
    if (!query) return;

    setSearchQuery(query);
    setCurrentPage('search');
  };

  return (
    <div className="home-hero">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">Welcome To AgroBD</h1>
        <h2 className="hero-subtitle">
          Precision Agriculture & Field Guidance for <span>Bangladesh</span>
        </h2>

        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search Rice, Potato, Mango, Blight, Ridomil, Khulna..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit" title="Search">🔍</button>
        </form>

        <p className="hero-description">
          Empowering 1.2M+ farmers across 64 districts with verified BRRI & BARI cultivation guides,
          <br />
          AI-assisted leaf disease diagnostics, precise NPK dosage calculators
          <br />
          Pesticide dilution standards, and real-time wholesale Mandi prices.
        </p>
      </div>

      <div className="hero-footer">
        <span className="network-tag">
          Agricultural Intelligence
          <br />
          network
        </span>
        <button className="about-btn" onClick={() => setCurrentPage('about')}>
          About Us
        </button>
      </div>
    </div>
  );
}

export default Home;