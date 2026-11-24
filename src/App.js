import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import AboutUs from './AboutUs';
import CropsHub from './CropsHub';
import Diseases from './Diseases';
import { Fertilizers, Chemicals, Guidelines, Market } from './ExtraModules';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      {currentPage === 'home' && <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />}

      {currentPage === 'home' && (
        <Home setCurrentPage={setCurrentPage} setSearchQuery={setSearchQuery} />
      )}
      {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
      {currentPage === 'about' && <AboutUs setCurrentPage={setCurrentPage} />}
      {currentPage === 'crops' && (
        <CropsHub
          setCurrentPage={setCurrentPage}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      )}
      {currentPage === 'diseases' && <Diseases setCurrentPage={setCurrentPage} />}
      {currentPage === 'fertilizers' && <Fertilizers setCurrentPage={setCurrentPage} />}
      {currentPage === 'chemicals' && <Chemicals setCurrentPage={setCurrentPage} />}
      {currentPage === 'guidelines' && <Guidelines setCurrentPage={setCurrentPage} />}
      {currentPage === 'market' && <Market setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;