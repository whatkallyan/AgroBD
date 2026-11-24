import React from 'react';
import { cropsData, diseasesData, chemicalsData, marketData } from './data';

function SearchResults({ setCurrentPage, searchQuery, setSearchQuery }) {
  const q = searchQuery.trim().toLowerCase();

  const matchedCrops = cropsData.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.season.toLowerCase().includes(q)
  );

  const matchedDiseases = diseasesData.filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.crop.toLowerCase().includes(q) ||
      d.symptoms.toLowerCase().includes(q) ||
      d.treatment.toLowerCase().includes(q)
  );

  const matchedChemicals = chemicalsData.filter(
    (ch) =>
      ch.name.toLowerCase().includes(q) ||
      ch.type.toLowerCase().includes(q) ||
      ch.target.toLowerCase().includes(q)
  );

  const matchedMarket = marketData.filter(
    (m) =>
      m.crop.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q) ||
      m.market.toLowerCase().includes(q)
  );

  const totalResults =
    matchedCrops.length + matchedDiseases.length + matchedChemicals.length + matchedMarket.length;

  return (
    <div className="page-wrapper crops-bg">
      <div className="overlay"></div>
      <div className="page-inner">
        <div className="page-top-bar">
          <span className="hub-badge">🔍 Global Agricultural Search</span>
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

        {/* Live Search Box inside Search Page */}
        <div className="search-box" style={{ margin: '10px 0 25px', maxWidth: '650px' }}>
          <input
            type="text"
            placeholder="Type crop, vegetable, disease, chemical, or district..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          {searchQuery && (
            <button type="button" onClick={() => setSearchQuery('')} title="Clear">
              ✕
            </button>
          )}
        </div>

        <h2 className="page-subtitle">
          Showing <strong>{totalResults}</strong> unified results across all AgroBD modules for "{searchQuery}"
        </h2>

        {totalResults === 0 && (
          <div className="crop-card" style={{ textAlign: 'center', padding: '40px' }}>
            <h3>No exact match found for "{searchQuery}"</h3>
            <p className="card-desc">Try searching: Rice, Potato, Tomato, Mango, Onion, Blight, Blast, Ridomil, or Khulna.</p>
          </div>
        )}

        {/* 1. Matching Crops & Vegetables */}
        {matchedCrops.length > 0 && (
          <div style={{ marginBottom: '35px' }}>
            <h2 className="page-title" style={{ fontSize: '26px' }}>
              🌾 Crops & Varieties ({matchedCrops.length})
            </h2>
            <div className="cards-grid">
              {matchedCrops.map((crop) => (
                <div key={crop.id} className="crop-card">
                  <div className="card-img-box">
                    <img src={crop.image} alt={crop.name} />
                    <span className="cat-tag">{crop.category}</span>
                  </div>
                  <h3>{crop.name}</h3>
                  <p className="card-desc">{crop.description}</p>
                  <div className="card-specs">
                    <p><span>Season :</span> {crop.season}</p>
                    <p><span>Soil :</span> {crop.soil}</p>
                    <p><span>Sowing :</span> {crop.sowing}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Matching Diseases */}
        {matchedDiseases.length > 0 && (
          <div style={{ marginBottom: '35px' }}>
            <h2 className="page-title" style={{ fontSize: '26px' }}>
              🦠 Related Diseases & Remedies ({matchedDiseases.length})
            </h2>
            <div className="cards-grid">
              {matchedDiseases.map((dis) => (
                <div key={dis.id} className="disease-card">
                  <span className="hub-badge" style={{ fontSize: '11px', padding: '3px 10px' }}>{dis.crop}</span>
                  <h3 style={{ marginTop: '10px' }}>{dis.name}</h3>
                  <p className="card-desc">{dis.symptoms}</p>
                  <p className="spec-label">Treatment:</p>
                  <p className="card-desc">{dis.treatment}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Matching Agro-Chemicals */}
        {matchedChemicals.length > 0 && (
          <div style={{ marginBottom: '35px' }}>
            <h2 className="page-title" style={{ fontSize: '26px' }}>
              🧴 Recommended Agro-Chemicals ({matchedChemicals.length})
            </h2>
            <div className="cards-grid">
              {matchedChemicals.map((chem) => (
                <div key={chem.id} className="crop-card">
                  <span className="hub-badge" style={{ fontSize: '11px', padding: '3px 10px' }}>{chem.type}</span>
                  <h3 style={{ marginTop: '10px' }}>{chem.name}</h3>
                  <div className="card-specs">
                    <p><span>Target :</span> {chem.target}</p>
                    <p><span>Dosage :</span> {chem.dosage}</p>
                    <p><span>PHI :</span> {chem.phi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Matching Wholesale Market Rates */}
        {matchedMarket.length > 0 && (
          <div style={{ marginBottom: '35px' }}>
            <h2 className="page-title" style={{ fontSize: '26px' }}>
              📊 Wholesale Market Rates ({matchedMarket.length})
            </h2>
            <div className="market-table-box">
              <table className="market-table">
                <thead>
                  <tr>
                    <th>Commodity</th>
                    <th>Category</th>
                    <th>District Hub</th>
                    <th>Wholesale Rate</th>
                    <th>24h Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {matchedMarket.map((row) => (
                    <tr key={row.id}>
                      <td>{row.crop}</td>
                      <td>{row.category}</td>
                      <td>{row.market}</td>
                      <td style={{ color: '#eab308', fontWeight: 'bold' }}>{row.price}</td>
                      <td style={{ color: row.trend.includes('▼') ? '#f87171' : '#4ade80' }}>{row.trend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResults;