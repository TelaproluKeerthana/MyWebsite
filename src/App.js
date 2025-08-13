import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import ContentArea from './components/ContentArea';

function App() {
  const [selectedNav, setSelectedNav] = useState('home');

  const handleNavSelect = (navItem) => {
    setSelectedNav(navItem);
  };

  return (
    <div className="App">
      <div className="main-container">
        <Navigation 
          selectedNav={selectedNav} 
          onNavSelect={handleNavSelect} 
        />
        <ContentArea selectedNav={selectedNav} />
      </div>
      <div className="system-ready">SYSTEM READY</div>
    </div>
  );
}

export default App;
