import React, { useState } from 'react';
import { diseasesData } from './data';

function Diseases({ setCurrentPage }) {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [cropType, setCropType] = useState('All Crops');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [diagnosisResult, setDiagnosisResult] = useState('');

  const symptomsList = [
    '+ Water-soaked wavy edges',
    '+ Brown necrotic collar',
    '+ Hollow central stem / Dead heart',
    '+ Yellowing leaf tips',
    '+ Root sloughing in soggy soil',
    '+ White empty panicles'
  ];

  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleDiagnose = () => {
    if (selectedSymptoms.length === 0 && !uploadedImage) {
      alert('Please upload a leaf photo or select at least one symptom!');
      return;
    }
    if (selectedSymptoms.some((s) => s.includes('Water-soaked') || s.includes('Yellowing'))) {
      setDiagnosisResult('Possible Match: Leaf Blight (Bacterial & Fungal) — Apply Copper Oxychloride (2.5 g/L).');
    } else {
      setDiagnosisResult('Possible Match: Root Rot & Damping-off — Apply Ridomil Gold (2 g/L).');
    }
  };

  return (
    <div className="page-wrapper diseases-bg">
      <div className="overlay"></div>
      <div className="page-inner">
        <div className="page-top-bar">
          <span className="hub-badge">Diseases Identifier & Management</span>
          <button className="pill-btn" onClick={() => setCurrentPage('home')}>
            Home
          </button>
        </div>

        <div className="diseases-layout">
          <div className="diseases-left">
            <h1 className="page-title">Crop Disease Diagnosis</h1>
            <p className="page-subtitle">
              Identify symptoms early and apply targeted remedies with precision fungicides, biological controls, and IPM protocols.
            </p>

            <div className="disease-cards-row">
              {diseasesData.map((item) => (
                <div key={item.id} className="disease-card">
                  <div className="card-img-box">
                    <img src={item.image} alt={item.name} />
                    <span className="risk-badge">{item.risk}</span>
                  </div>
                  <h3>{item.name}</h3>
                  <p className="spec-label">Symptoms:</p>
                  <p className="card-desc">{item.symptoms}</p>

                  <div className="early-signs-box">
                    <p className="signs-title">⚠️ Early Signs to Watch:</p>
                    <ul>
                      {item.earlySigns.map((sign, index) => (
                        <li key={index}>{sign}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="spec-label">Recommended Treatment:</p>
                  <p className="card-desc">{item.treatment}</p>

                  <p className="spec-label">Bio-Control & Traps:</p>
                  <p className="card-desc">{item.bioControl}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="diagnosis-panel">
            <label className="upload-box">
              {uploadedImage ? (
                <img src={uploadedImage} alt="Uploaded Leaf" className="preview-img" />
              ) : (
                <>
                  <span className="upload-icon">📤</span>
                  <p>Click to upload leaf photo</p>
                  <small>Supports high-res JPEG, PNG, or mobile camera capture</small>
                </>
              )}
              <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
            </label>

            <div className="symptoms-header">
              <span>Select Visible Symptoms:</span>
              <select value={cropType} onChange={(e) => setCropType(e.target.value)}>
                <option>Crop Type</option>
                <option>Rice (Paddy)</option>
                <option>Wheat</option>
                <option>Vegetables</option>
              </select>
            </div>

            <div className="symptoms-list">
              {symptomsList.map((sym) => (
                <button
                  key={sym}
                  className={`symptom-btn ${selectedSymptoms.includes(sym) ? 'selected' : ''}`}
                  onClick={() => toggleSymptom(sym)}
                >
                  {sym}
                </button>
              ))}
            </div>

            <button className="scan-btn" onClick={handleDiagnose}>
              Scan & Diagnose Crop Pathology
            </button>

            {diagnosisResult && <div className="diagnosis-alert">{diagnosisResult}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diseases;