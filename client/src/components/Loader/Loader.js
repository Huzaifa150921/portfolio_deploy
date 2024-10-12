import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div className="loader-overlay"> {/* Container for the overlay */}
      <div className="loader-container">
        <div className="ring" />
        <div className="ring" />
        <div className="ring" />
        <div className="ring" />
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
}

export default Loader;
