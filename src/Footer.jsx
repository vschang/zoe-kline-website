import React from 'react';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <div className="Footer Light-background">
      <div className="Love-container">
        <h3 className="mt-40 ml-40">Zoe Kline</h3>
        <div className="Flex">
          <p className="Love-text ml-40">made with ❤️ by</p>
          <a href="https://www.valeriechang.online/" target="_blank" rel="noreferrer" className="Love-link">Valerie Chang</a>
        </div>
      </div>
      <div className="Flex-column mt-40">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Location</NavLink>
        <NavLink to="/classes">Classes</NavLink>
        <a href="https://zoeklineyoga.setmore.com/zoekline" target="_blank" rel="noreferrer">Book a Class</a>
      </div>
      <div className="Flex mt-40 mr-40">
        <a href="https://www.instagram.com/zoekline.yoga/" target="_blank" rel="noreferrer">
          <Icon icon="mdi:instagram" />
        </a>
      </div>
    </div>
  )
}

export default Footer;
