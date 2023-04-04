import React from 'react';
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import './Pages.css'

function HomePage() {
  return (
    <div className="Page">
      <Navbar />
      <section className="Hero">
        <h1>Yoga for your mind, body and soul.</h1>
        <a href="/">Book a Class</a>
      </section>
      <section className="Group-classes-container">
        <h1>Group Classes, Private Classes & Events</h1>
        <img className="Group-classes-image" src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80" alt="a Woman does yoga"></img>
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
