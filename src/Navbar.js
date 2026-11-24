import React from 'react';

function Navbar({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'crops', label: 'Crops' },
    { id: 'diseases', label: 'Diseases' },
    { id: 'fertilizers', label: 'Fertilizers' },
    { id: 'chemicals', label: 'Chemicals' },
    { id: 'guidelines', label: 'Guidelines' },
    { id: 'market', label: 'Market' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => setCurrentPage('home')}>
        <span className="logo-icon">🌿</span>
        <span className="brand-title">Agro BD</span>
        <span className="portal-badge">Portal</span>
      </div>

      <div className="nav-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-pill ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => setCurrentPage(item.id)}
          >
            {item.label}
          </button>
        ))}
        <button
          className="login-nav-btn"
          onClick={() => setCurrentPage('login')}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;