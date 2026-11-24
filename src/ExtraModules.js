import React, { useState, useEffect } from 'react';
import { chemicalsData, marketData } from './data';

export function Fertilizers({ setCurrentPage }) {
  const [crop, setCrop] = useState('Rice (Boro)');
  const [landDecimal, setLandDecimal] = useState(33);

  const rates = {
    'Rice (Boro)': { urea: 0.9, tsp: 0.4, mop: 0.45, gypsum: 0.3, zinc: 0.04 },
    'Rice (T. Aman)': { urea: 0.65, tsp: 0.3, mop: 0.35, gypsum: 0.2, zinc: 0.03 },
    'Wheat': { urea: 0.75, tsp: 0.5, mop: 0.4, gypsum: 0.35, zinc: 0.04 },
    'Potato': { urea: 1.1, tsp: 0.75, mop: 0.9, gypsum: 0.4, zinc: 0.05 },
    'Tomato': { urea: 0.95, tsp: 0.65, mop: 0.55, gypsum: 0.25, zinc: 0.04 },
    'Mustard': { urea: 0.65, tsp: 0.45, mop: 0.3, gypsum: 0.4, zinc: 0.03 }
  };

  const currentRate = rates[crop];

  return (
    <div className="page-wrapper crops-bg">
      <div className="overlay"></div>
      <div className="page-inner">
        <div className="page-top-bar">
          <span className="hub-badge">🧪 NPK & Micronutrient Calculator</span>
          <button className="pill-btn" onClick={() => setCurrentPage('home')}>Home</button>
        </div>

        <h1 className="page-title">Precision Fertilizer Dosage Calculator</h1>
        <p className="page-subtitle">BARC-recommended balanced fertilization (33 Decimal = 1 Standard Bigha).</p>

        <div className="calc-container">
          <div className="calc-inputs">
            <div className="input-group">
              <label>Select Crop Variety</label>
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
              <h3>Urea (Nitrogen - N)</h3>
              <h2 className="page-title">{(landDecimal * currentRate.urea).toFixed(1)} kg</h2>
              <p className="card-desc">Split into 3 equal doses (Basal, Tillering, Panicle initiation).</p>
            </div>
            <div className="crop-card">
              <h3>TSP / DAP (Phosphate - P)</h3>
              <h2 className="page-title">{(landDecimal * currentRate.tsp).toFixed(1)} kg</h2>
              <p className="card-desc">Apply 100% during final plowing before planting.</p>
            </div>
            <div className="crop-card">
              <h3>MoP (Potash - K)</h3>
              <h2 className="page-title">{(landDecimal * currentRate.mop).toFixed(1)} kg</h2>
              <p className="card-desc">Apply 2/3 basal and 1/3 before flowering for grain weight.</p>
            </div>
            <div className="crop-card">
              <h3>Gypsum (Sulfur - S)</h3>
              <h2 className="page-title">{(landDecimal * currentRate.gypsum).toFixed(1)} kg</h2>
              <p className="card-desc">Essential for protein synthesis and chlorophyll formation.</p>
            </div>
            <div className="crop-card">
              <h3>Zinc Sulfate (Zn)</h3>
              <h2 className="page-title">{(landDecimal * currentRate.zinc).toFixed(2)} kg</h2>
              <p className="card-desc">Prevents Khaira disease and stunted growth in wet soils.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chemicals({ setCurrentPage }) {
  const [typeFilter, setTypeFilter] = useState('All');

  const filtered =
    typeFilter === 'All'
      ? chemicalsData
      : chemicalsData.filter((c) => c.type === typeFilter);

  return (
    <div className="page-wrapper diseases-bg">
      <div className="overlay"></div>
      <div className="page-inner">
        <div className="page-top-bar">
          <span className="hub-badge">🧴 Agro-Chemicals & Dilution Guide</span>
          <button className="pill-btn" onClick={() => setCurrentPage('home')}>Home</button>
        </div>

        <h1 className="page-title">Pesticide, Fungicide & Herbicide Standards</h1>
        <p className="page-subtitle">DAE-approved active ingredients, exact dilution ratios, and Pre-Harvest Intervals (PHI).</p>

        <div className="filter-bar">
          {['All', 'Fungicide', 'Insecticide', 'Bactericide', 'Miticide', 'Herbicide'].map((t) => (
            <button
              key={t}
              className={`filter-pill ${typeFilter === t ? 'active' : ''}`}
              onClick={() => setTypeFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="cards-grid">
          {filtered.map((chem) => (
            <div key={chem.id} className="crop-card">
              <span className="hub-badge" style={{ fontSize: '11px', padding: '3px 10px' }}>{chem.type}</span>
              <h3 style={{ marginTop: '10px' }}>{chem.name}</h3>
              <div className="card-specs">
                <p><span>Target :</span> {chem.target}</p>
                <p><span>Dosage :</span> {chem.dosage}</p>
                <p><span>Pre-Harvest Interval :</span> {chem.phi}</p>
                <p><span>Safety Note :</span> {chem.safety}</p>
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
      step: '01. Soil Health & Lime Management',
      detail: 'Test topsoil pH every 2 years. In acidic soils (pH < 5.5) of Sylhet, Rangpur, or Madhupur tract, apply Dolochun (4 kg/decimal) 15 days before sowing.'
    },
    {
      step: '02. Seed Germination & Treatment',
      detail: 'Ensure >80% germination rate. Treat seeds with Provax-200 WP (2.5 g/kg) or Trichoderma bio-fungicide to prevent seedling damping-off.'
    },
    {
      step: '03. Alternate Wetting & Drying (AWD)',
      detail: 'Install a perforated PVC pipe in Boro rice fields. Irrigate only when water drops 15 cm below soil level—saves 25% irrigation cost and reduces methane.'
    },
    {
      step: '04. LCC-Based Urea Optimization',
      detail: 'Use a Leaf Color Chart (LCC) every 7 days after transplanting; apply Urea only when leaf greenness falls below score 4 to prevent lodging and pest outbreaks.'
    },
    {
      step: '05. Integrated Pest Management (IPM)',
      detail: 'Place 10–12 bamboo perches per bigha for insectivorous birds and install sex-pheromone traps for fruit flies and borers before chemical intervention.'
    },
    {
      step: '06. Post-Harvest Moisture Control',
      detail: 'Sun-dry paddy, wheat, and pulses to 12% moisture content (seed cracks cleanly between teeth) and store in hermetic PICS bags to stop weevil damage.'
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

        <h1 className="page-title">Modern Agronomic Best Practices</h1>
        <p className="page-subtitle">Scientific field protocols for climate-resilient, low-cost, high-yield farming.</p>

        <div className="cards-grid">
          {guides.map((g, idx) => (
            <div key={idx} className="crop-card">
              <h3 style={{ color: '#4ade80' }}>{g.step}</h3>
              <p className="card-desc" style={{ fontSize: '13.5px', marginTop: '10px', lineHeight: '1.5' }}>{g.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Market({ setCurrentPage }) {
  const [regionFilter, setRegionFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);

  // Load saved prices from localStorage or fallback to default marketData
  const [livePrices, setLivePrices] = useState(() => {
    const saved = localStorage.getItem('agrobd_market_prices');
    return saved ? JSON.parse(saved) : marketData;
  });

  const [newCrop, setNewCrop] = useState('');
  const [newCategory, setNewCategory] = useState('Vegetables');
  const [newMarket, setNewMarket] = useState('Khulna');
  const [newPrice, setNewPrice] = useState('');
  const [newTrend, setNewTrend] = useState('▲ +2.0%');

  useEffect(() => {
    localStorage.setItem('agrobd_market_prices', JSON.stringify(livePrices));
  }, [livePrices]);

  const handleAddOrUpdatePrice = (e) => {
    e.preventDefault();
    if (!newCrop.trim() || !newPrice.trim()) return;

    const existingIndex = livePrices.findIndex(
      (item) =>
        item.crop.toLowerCase() === newCrop.trim().toLowerCase() &&
        item.market.toLowerCase() === newMarket.toLowerCase()
    );

    if (existingIndex > -1) {
      const updated = [...livePrices];
      updated[existingIndex] = {
        ...updated[existingIndex],
        price: newPrice.trim(),
        trend: newTrend
      };
      setLivePrices(updated);
    } else {
      const newEntry = {
        id: Date.now(),
        crop: newCrop.trim(),
        category: newCategory,
        market: newMarket,
        price: newPrice.trim(),
        trend: newTrend
      };
      setLivePrices([newEntry, ...livePrices]);
    }

    setNewCrop('');
    setNewPrice('');
    setShowForm(false);
  };

  const handleResetDefault = () => {
    localStorage.removeItem('agrobd_market_prices');
    setLivePrices(marketData);
  };

  const filtered =
    regionFilter === 'All'
      ? livePrices
      : livePrices.filter((p) => p.market === regionFilter);

  return (
    <div className="page-wrapper crops-bg">
      <div className="overlay"></div>
      <div className="page-inner">
        <div className="page-top-bar">
          <span className="hub-badge">📊 DAM Wholesale Mandi Prices</span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="pill-btn" onClick={() => setShowForm(!showForm)}>
              {showForm ? '✕ Close Form' : '+ Update / Add Rate'}
            </button>
            <button className="pill-btn" onClick={() => setCurrentPage('home')}>Home</button>
          </div>
        </div>

        <h1 className="page-title">Live Agricultural Market Rates</h1>
        <p className="page-subtitle">Daily wholesale farm-gate rates across major district hubs (1 Maund = 40 kg).</p>

        {/* Live Price Update Form */}
        {showForm && (
          <form onSubmit={handleAddOrUpdatePrice} className="calc-container" style={{ marginBottom: '25px' }}>
            <h3 style={{ color: '#4ade80', marginBottom: '15px' }}>Update Existing or Add New Mandi Price</h3>
            <div className="calc-inputs">
              <div className="input-group">
                <label>Commodity Name</label>
                <input
                  type="text"
                  placeholder="e.g., Hybrid Tomato"
                  value={newCrop}
                  onChange={(e) => setNewCrop(e.target.value)}
                  className="custom-input"
                  required
                />
              </div>

              <div className="input-group">
                <label>Category</label>
                <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)} className="custom-select">
                  <option>Cereals</option>
                  <option>Vegetables</option>
                  <option>Fruits</option>
                  <option>Pulses</option>
                  <option>Cash Crops</option>
                </select>
              </div>

              <div className="input-group">
                <label>District Hub</label>
                <select value={newMarket} onChange={(e) => setNewMarket(e.target.value)} className="custom-select">
                  <option>Khulna</option>
                  <option>Jessore</option>
                  <option>Rajshahi</option>
                  <option>Bogura</option>
                  <option>Kushtia</option>
                  <option>Satkhira</option>
                  <option>Faridpur</option>
                  <option>Dinajpur</option>
                </select>
              </div>

              <div className="input-group">
                <label>Wholesale Rate</label>
                <input
                  type="text"
                  placeholder="e.g., 55 BDT / kg"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="custom-input"
                  required
                />
              </div>

              <div className="input-group">
                <label>24h Trend</label>
                <select value={newTrend} onChange={(e) => setNewTrend(e.target.value)} className="custom-select">
                  <option value="▲ +2.0%">▲ Rising (+2.0%)</option>
                  <option value="▼ -2.5%">▼ Falling (-2.5%)</option>
                  <option value="▬ Stable">▬ Stable</option>
                </select>
              </div>
            </div>

            <div style={{ marginTop: '15px', display: 'flex', gap: '12px' }}>
              <button type="submit" className="pill-btn">Save Live Rate</button>
              <button type="button" className="filter-pill" onClick={handleResetDefault}>Reset Default Data</button>
            </div>
          </form>
        )}

        <div className="filter-bar">
          {['All', 'Khulna', 'Jessore', 'Rajshahi', 'Bogura', 'Kushtia', 'Satkhira', 'Faridpur', 'Dinajpur'].map((loc) => (
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
                <th>Segment</th>
                <th>District Hub</th>
                <th>Wholesale Rate</th>
                <th>24h Trend</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
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
    </div>
  );
}