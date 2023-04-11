import React from 'react';
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import Portrait from '../images/zoe-portrait.jpeg'
import './Pages.css'

function AboutPage() {
  return (
    <div className="Gradient-background">
      <Navbar />
      <div className="About-me-container">
        <h1 className="About-me-title">About Me</h1>
      </div>
      <section className="Desktop-mobile-flex">
        <img className="Zoe-portrait" src={Portrait} alt="Zoe Kline"></img>
        <div className="Flex-column About-me-text mb-60">
          <h4 className="mb-20 mt-20">Hey I'm Zoë!</h4>
          <p>Im a 24 year old Ex-Pat living in Madrid, Spain. I relocated to Madrid after graduating from University in California, and I have absolutely fell in love with life here in this city. I began practicing yoga in 2016, but didn’t fully recognize its power and influence in my life until about 3 years later in my last year of University. Throughout the years I have used the many tools of yoga to calm my mind and return to a place of homeostasis in my body. My wish through my work as a yoga teacher is to share my story and these tools to help others work through whatever challenges they face in their everyday lives and to help them connect with themselves and others.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default AboutPage;
