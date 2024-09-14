import React from 'react';
import './css/Navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#intro">Introduction</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#prizes">Prizes</a></li>
        <li><a href="#faq">FAQ</a></li>
        
      </ul>
    </nav>
  );
}

export default NavBar;
