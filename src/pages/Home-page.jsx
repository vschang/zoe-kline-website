import React from 'react';
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import Class from '../images/zoe-classes.jpeg'
import './Pages.css'

function HomePage() {
  return (
    <div>
      <Navbar />
      <section className="Dark-background Flex Justify-center">
        <div className="Hero">
          <h1>Yoga for your mind, body and soul.</h1>
          <a href="/">Book a Class</a>
        </div>
      </section>
      <section className="Group-classes-container">
        <h1>Group Classes, Private Classes & Events</h1>
        <img className="Group-classes-image" src={Class} alt="Zoe Kline does yoga"></img>
        <a href="/classes" className="Grey-button">View More</a>
      </section>
      <section className="Newsletter-container Flex-column">
        <h1>Subscribe to My Newsletter</h1>
        <h3>Sign up to stay updated</h3>
      </section>
      <Footer />
    </div>
  )
}

export default HomePage;
