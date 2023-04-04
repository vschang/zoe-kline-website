import React from 'react';
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import { Icon } from '@iconify/react';
import Map from '../Map.jsx'

function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="About-me-container">
        <h1 className="About-me-title">Contact Page</h1>
      </div>
      <section className="Desktop-mobile-flex Light-background Justify-between Contact-container">
        <div>
          <h2>Contact me.</h2>
          <p>zoekline4@gmail.com</p>
          <p>+34 603 84 64 48</p>
          <div className="Flex">
            <a href="https://www.instagram.com/zoekline.yoga/" target="_blank" rel="noreferrer">
              <Icon icon="mdi:instagram" />
            </a>
            <a href="/">
              <Icon icon="ri:facebook-fill" />
            </a>
          </div>
        </div>
        <div className="Contact-form mr-40">
          <label>Name</label>
          <div className="Flex">
            <div className="Flex-column Flex-1">
              <input type="text" id="fname" name="firstname"></input>
              <label htmlFor="fname" className="Sm-label">First Name</label>
            </div>
            <div className="Flex-column Flex-1 ml-10">
              <input type="text" id="lname" name="lastname"></input>
              <label htmlFor="lname" className="Sm-label">Last Name</label>
            </div>
          </div>
          <div className="Flex-column">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email"></input>

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>

            <input type="submit" value="Send"></input>
          </div>
        </div>
      </section>
      <section className="location-section">
        <Map />
      </section>
      <Footer />
    </div>
  )
}

export default ContactPage;
