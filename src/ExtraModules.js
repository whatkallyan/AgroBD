import React, { useState } from 'react';

export function Fertilizers({ setCurrentPage }) {
  const [crop, setCrop] = useState('Rice (Paddy)');
  const [landDecimal, setLandDecimal] = useState(33); // 33 decimal = 1 Bigha

  const rates = {
    'Rice (Paddy)': { urea: 0.75, tsp: 0.35, mop: 0.4, gypsum: 0.25 },
    'Wheat': { urea: 0.65, tsp: 0.45, mop: 0.35, gypsum: 0.3 },
    'Tomato': { urea: 0.9, tsp: 0.6, mop: 0.5, gypsum: 0.2 },
    'Mustard (Oilseed)': { urea: 0.6, tsp: 0.4, mop: 0.25, gypsum: 0.35 }
  };

  const currentRate = rates[crop];

  return (
    <div className="page-wrapper crops-bg">
      <div className="overlay"></div>
      <div className="page-inner">
        <div className="page-top-bar">
          <span className="hub-badge">🧪 NPK Fertilizer Calculator</span>
          <button className="pill-btn" onClick={() => setCurrentPage('home')}>Home</button>
        </div>

        <h1 className="page-title">Precision NPK Dosage Calculator</h1>
        <p className="page-subtitle">Calculate BARC-recommended chemical fertilizer requirements based on land area.</p>

        <div className="calc-container">
          <div className="calc-inputs">
            <div className="input-group">
              <label>Select Crop</label>
              <select value={crop} onChange={(e) => setCrop(e.target.value)} className="custom-select">
                {Object.keys(rates).map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label>Land Area (in Decimal / শতাংশ)</label>
              <input
                type="number"
                min="1"
                value={landDecimal}
                onChange={(e) => setLandDecimal(Number(e.target.value) || 0)}
                className="custom-input"
              />
            </div>
          </div>

          <div className="cards-grid" style={{ marginTop: '25px' }}>
            <div className="crop-card">
              <h3>Urea (Nitrogen)</h3>
              <h2 className="page-title">{(landDecimal * currentRate.urea).toFixed(1)} kg</h2>
              <p className="card-desc">Apply in 3 equal splits during vegetative & panicle stages.</p>
            </div>
            <div className="crop-card">
              <h3>TSP (Phosphate)</h3>
              <h2 className="page-title">{(landDecimal * currentRate.tsp).toFixed(1)} kg</h2>
              <p className="card-desc">Apply full dose during final land preparation.</p>
            </div>
            <div className="crop-card">
              <h3>MoP (Potash)</h3>
              <h2 className="page-title">{(landDecimal * currentRate.mop).toFixed(1)} kg</h2>
              <p className="card-desc">Improves grain filling, disease resistance & stalk strength.</p>
            </div>
            <div className="crop-card">
              <h3>Gypsum (Sulfur)</h3>
              <h2 className="page-title">{(landDecimal * currentRate.gypsum).toFixed(1)} kg</h2>
              <p className="card-desc">Prevents leaf yellowing and boosts oil/protein synthesis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chemicals({ setCurrentPage }) {
  const chemicalsList = [
    {
      name: 'Copper Oxychloride 50 WP',
      target: 'Bacterial Leaf Blight & Downy Mildew',
      dosage: '2.5 g per Liter of water',
      safety: 'Pre-harvest interval: 7 days. Use protective mask.'
    },
    {
      name: 'Metalaxyl + Mancozeb (Ridomil Gold)',
      target: 'Root Rot, Damping-off & Late Blight',
      dosage: '2.0 g per Liter of water (Soil drench)',
      safety: 'Avoid spraying during strong midday sunlight.'
    },
    {
      name: 'Imidacloprid 20 SL',
      target: 'Mango Hopper, Aphids & Brown Planthopper',
      dosage: '0.5 ml per Liter of water',
      safety: 'Toxic to bees; avoid spraying during active pollination.'
    },
    {
      name: 'Azoxystrobin + Difenoconazole',
      target: 'Sheath Blight & Anthracnose',
      dosage: '1.0 ml per Liter of water',
      safety: 'Do not mix with alkaline Bordeaux mixture.'
    }
  ];

  return (
    <div className="page-wrapper diseases-bg">
      <div className="overlay"></div>
      <div className="page-inner">
        <div className="page-top-bar">
          <span className="hub-badge">🧴 Agro-Chemicals & Dilution</span>
          <button className="pill-btn" onClick={() => setCurrentPage('home')}>Home</button>
        </div>

        <h1 className="page-title">Pesticide & Fungicide Standards</h1>
        <p className="page-subtitle">Verified dilution ratios and safety protocols for field application.</p>

        <div className="cards-grid">
          {chemicalsList.map((chem, idx) => (
            <div key={idx} className="crop-card">
              <h3>{chem.name}</h3>
              <div className="card-specs">
                <p><span>Target Pest/Disease :</span> {chem.target}</p>
                <p><span>Dilution Rate :</span> {chem.dosage}</p>
                <p><span>Safety Protocol :</span> {chem.safety}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Guidelines({ setCurrentPage }) {
  const guides = [
    {
      step: '01. Soil Testing & pH Balancing',
      detail: 'Test topsoil before Rabi/Kharif sowing. Apply agricultural lime (4 kg/decimal) if soil pH drops below 5.5.'
    },
    {
      step: '02. Certified Seed Treatment',
      detail: 'Treat seeds with Provax-200 (2.5 g/kg seed) to eliminate seed-borne fungal pathogens before sowing.'
    },
    {
      step: '03. Alternate Wetting & Drying (AWD)',
      detail: 'For Boro rice, allow field water to subside 15 cm below soil surface before re-irrigating to save 25% water.'
    },
    {
      step: '04. Integrated Pest Management (IPM)',
      detail: 'Install pheromone traps (8–10 per bigha) and perching sticks for birds before resorting to chemical sprays.'
    }
  ];

  return (
    <div className="page-wrapper crops-bg">
      <div className="overlay"></div>
      <div className="page-inner">
        <div className="page-top-bar">
          <span className="hub-badge">📘 BRRI & BARI Field Guidelines</span>
          <button className="pill-btn" onClick={() => setCurrentPage('home')}>Home</button>
        </div>

        <h1 className="page-title">Standard Cultivation Guidelines</h1>
        <p className="page-subtitle">Step-by-step best practices for sustainable yield maximization.</p>

        <div className="cards-grid">
          {guides.map((g, idx) => (
            <div key={idx} className="crop-card">
              <h3 style={{ color: '#4ade80' }}>{g.step}</h3>
              <p className="card-desc" style={{ fontSize: '14px', marginTop: '10px' }}>{g.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Market({ setCurrentPage }) {
  const [regionFilter, setRegionFilter] = useState('All');

  const prices = [
    { crop: 'BRRI Dhan-28 (Paddy)', market: 'Khulna', price: '1,320 BDT / Maund', trend: '▲ +2.5%' },
    { crop: 'Wheat (BARI Gom-33)', market: 'Rajshahi', price: '1,480 BDT / Maund', trend: '▲ +1.8%' },
    { crop: 'Hybrid Tomato', market: 'Jessore', price: '45 BDT / kg', trend: '▼ -3.0%' },
    { crop: 'Lentil (Masoor Dal)', market: 'Kushtia', price: '118 BDT / kg', trend: '▲ +1.2%' },
    { crop: 'Mustard Seed (BARI-14)', market: 'Sirajganj', price: '3,150 BDT / Maund', trend: '▬ Stable' },
    { crop: 'Himsagar Mango', market: 'Satkhira', price: '2,600 BDT / Maund', trend: '▲ +4.0%' }
  ];

  const filtered = regionFilter === 'All' ? prices : prices.filter((p) => p.market === regionFilter);

  return (
    <div className="page-wrapper crops-bg">
      <div className="overlay"></div>
      <div className="page-inner">
        <div className="page-top-bar">
          <span className="hub-badge">📊 Wholesale Mandi Prices</span>
          <button className="pill-btn" onClick={() => setCurrentPage('home')}>Home</button>
        </div>

        <h1 className="page-title">Live Agricultural Market Rates</h1>
        <p className="page-subtitle">Wholesale farm-gate prices across major agricultural hubs in Bangladesh.</p>

        <div className="filter-bar">
          {['All', 'Khulna', 'Jessore', 'Rajshahi', 'Kushtia', 'Satkhira'].map((loc) => (
            <button
              key={loc}
              className={`filter-pill ${regionFilter === loc ? 'active' : ''}`}
              onClick={() => setRegionFilter(loc)}
            >
              {loc}
            </button>
          ))}
        </div>

        <div className="market-table-box">
          <table className="market-table">
            <thead>
              <tr>
                <th>Commodity</th>
                <th>District Hub</th>
                <th>Wholesale Rate</th>
                <th>24h Trend</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.crop}</td>
                  <td>{row.market}</td>
                  <td style={{ color: '#eab308', fontWeight: 'bold' }}>{row.price}</td>
                  <td style={{ color: '#4ade80' }}>{row.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}