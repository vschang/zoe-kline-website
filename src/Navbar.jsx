import React from 'react';
import './Navbar.css'
import { Icon } from '@iconify/react';

function NavBar() {
  return (
    <div className="Navbar">
      <div className="Navbar-wrapper">
        <div className="Navbar-header">
          <h3 className="Logo">zoeklineyoga</h3>
          <button className="X-btn">
            <Icon className="X" icon="ei:close" />
          </button>
        </div>
        <div className="Nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/philosophy">Philosophy</a>
          <a href="/classes">Classes</a>
          <a href="/offerings">Offerings</a>
          <a href="/contact">Contact</a>
          <a className="Grey-button Big-btn" href="/">Book a Class</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
