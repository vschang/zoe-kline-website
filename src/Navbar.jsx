import React, {useState} from 'react';
import './Navbar.css'
import { Icon } from '@iconify/react';


function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {setIsOpen(prev => !prev)}

  return (
    <div className="NavBar">
      <div className={`Navbar-header Navbar-mobile ${isOpen ? "white-background" : ""}`}>
        <a href="/"><h3 className="Logo">zoeklineyoga</h3></a>
      {isOpen ?
        <button className="X-btn" onClick={() => handleToggle()}>
          <Icon className="X" icon="ei:close" />
        </button> :
        <button className="Hamburger-button" onClick={() => handleToggle()}>
          <Icon className="X" icon="system-uicons:menu-hamburger" />
        </button>
      }
      </div>
      {isOpen ?
      <div className="Navbar-mobile">
        <div className="Navbar-wrapper">
          {/* <div className="Navbar-header">
            <h3 className="Logo">zoeklineyoga</h3>
          </div> */}
          <div className="Nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/philosophy">Philosophy</a>
            <a href="/classes">Classes</a>
            <a href="/offerings">Offerings</a>
            <a href="/contact">Contact</a>
          </div>
          <a className="Grey-button Big-btn mt-60" href="/">Book a Class</a>
        </div>
      </div>
      : null}

      <div className=" Navbar-desktop">
        <div className="Navbar-wrapper">
          <div className="Navbar-header">
            <h3 className="Logo">zoeklineyoga</h3>
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
    </div>
  )
}

export default NavBar;
