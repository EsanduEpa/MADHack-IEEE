import React from 'react';
import './css/Prizes.css';

function Prizes() {
  return (
    <section className="prizes" id='prizes'>
      <h2>Prizes</h2>
      <div className="prizes-container">
        <div className="prize-card">
          <div className="prize-icon">🏆</div> 
          <strong>First Place</strong>
          <p>Rs. 60 000</p>
        </div>
        <div className="prize-card">
          <div className="prize-icon">🥈</div> 
          <strong>Second Place</strong>
          <p>Rs. 40 000</p>
        </div>
        <div className="prize-card">
          <div className="prize-icon">🥉</div>
          <strong>Third Place</strong>
          <p>Rs. 20 000</p>
        </div>
      </div>
    </section>
  );
}

export default Prizes;
