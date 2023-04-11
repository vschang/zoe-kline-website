import React from 'react';
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import Philosophy from '../images/zoe-philosophy.jpeg'
import { Icon } from '@iconify/react';

function PhilosophyPage() {
  return (
    <div>
      <Navbar />
      <div className="About-me-container">
        <h1 className="About-me-title">My Philosophy</h1>
      </div>
      <section className="Desktop-mobile-flex Light-background">
        <img className="Zoe-portrait" src={Philosophy} alt="Zoe Kline"></img>
        <div className="Flex-column About-me-text Philosophy-text">
          <h3 className="mt-10">Yoga is Union</h3>
          <p>My main philosophy of yoga is simple: <strong>Our minds, bodies and spirits are all one and each contributes to the health of the other.</strong> Similarly, on a larger scale, the true nature of yoga encourages that we are ALL part of the bigger picture, the union and the connection we all build with each other</p>
          <p>As a part of my experience with yoga I have garnered the understanding that many of us come to yoga in search for <strong>movement</strong> or some sort of physical benefit (flexibility, strength, balance etc) but the longer you work with your physical body, it is just a matter of time until you begin to <strong>connect</strong> to something less tangible - your subtle body (your mind and intellect, ego). When we as individuals do this we can gain <strong>understanding</strong> of ourselves, our needs, our desires and our purpose. This is where self-compassion and love is fostered, the thing we all must have to truly give our body what it needs and desires!</p>
          <div className="Flex Align-center">
            <p>Movement</p>
            <Icon icon="material-symbols:arrow-right-alt-rounded" />
            <p>Connection</p>
            <Icon icon="material-symbols:arrow-right-alt-rounded" />
            <p>Understanding</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PhilosophyPage;
