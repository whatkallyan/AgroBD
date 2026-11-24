import React, { useState } from 'react';
import { cropsData } from './data';

function CropsHub({ setCurrentPage, searchQuery, setSearchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Cereals', 'Vegetables', 'Fruits', 'Pulses', 'Cash Crops'];

  const filteredCrops = cropsData.filter((crop) => {
    const matchesCategory = selectedCategory === 'All' || crop.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      crop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crop.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-wrapper crops-bg">
      <div className="overlay"></div>
      <div className="page-inner">
        <div className="page-top-bar">
          <div className="top-left">
            <span className="hub-badge">🌾 Crops Hub</span>
            <span className="hub-sub">Agronomic Cultivation Specifications</span>
          </div>
          <button
            className="pill-btn"
            onClick={() => {
              setSearchQuery('');
              setCurrentPage('home');
            }}
          >
            Home
          </button>
        </div>

        <h1 className="page-title">Crops & Cultivation</h1>
        <p className="page-subtitle">
          Explore crop varieties, sowing seasons
          <br />
          Step-by-step farming tips tailored to regional soil and temperature zones
        </p>

        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(cat);
                setSearchQuery('');
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="cards-grid">
          {filteredCrops.map((crop) => (
            <div key={crop.id} className="crop-card">
              <div className="card-img-box">
                <img src={crop.image} alt={crop.name} />
                <span className="cat-tag">{crop.category}</span>
              </div>
              <div className="card-body">
                <h3>{crop.name}</h3>
                <p className="card-desc">{crop.description}</p>
                <div className="card-specs">
                  <p><span>Season :</span> {crop.season}</p>
                  <p><span>Soil :</span> {crop.soil}</p>
                  <p><span>Optimal Temp :</span> {crop.temp}</p>
                  <p><span>Sowing Period :</span> {crop.sowing}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CropsHub;