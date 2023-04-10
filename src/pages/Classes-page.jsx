import React from 'react';
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'

function ClassesPage() {
  return (
    <div>
      <Navbar />
      <div className="About-me-container">
        <h1 className="About-me-title">My Classes</h1>
      </div>
      <section className="Desktop-mobile-flex Light-background Classes-section">
        <img className="Classes-image" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="yoga class"></img>
        <div className="Flex-column About-me-text ml-40">
          <h3 className="mb-20">Style of Classes</h3>
          <p className="mb-20">My classes are mostly based in Vinyasa Yoga. We incorporate elements of breath work, power, flexibility, fluid movement and strength. The goal in every class is to adapt the sequence and the intention on what it is that my students need in that moment. Similar to life, we cannot expect that everything goes to plan, so a rule of thumb is to be ready for anything that comes and I encourage my students to do the same.</p>
          <p className='mb-60'>Overall, my classes will leave you feeling rejuvenated, relaxed and strong!</p>
        </div>
      </section>
      <section className="Desktop-mobile-flex Light-background Row-reverse Align-center">
        <img className="Classes-image" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="yoga class"></img>
        <div className="Flex-column Classes-text mr-40">
          <h4 className="mb-20">Reviews</h4>
          <p className="mb-20"><em>“Zoe has the great ability to build and sustain a welcoming and nurturing energy throughout the class. Her style is effortless and while she allows for free flow at one's own pace, she is graceful and attentive to technique adjustments at all levels. With great vibes such as music and different aromas, I strongly recommend you try out her class. She will flow you through an amazing set and you will leave feeling refreshed, still and most of all at peace with your body and breath.”</em></p>
          <p>-Brandon Hamel 2021</p>
        </div>
      </section>
      <section className="Book-a-class-section Flex-column">
        <h1>Book a Class</h1>
        <a className="Grey-button" href="/">Book a Class</a>
      </section>
      <Footer />
    </div>
  )
}

export default ClassesPage;
