import React from 'react';
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'

function OfferingsPage() {
  return (
    <div className="Gradient-background">
      <Navbar />
      <div className="About-me-container">
        <h1 className="About-me-title">Offerings</h1>
      </div>
      <div className="Offerings-page">
        <div className="Class-offerings">
          {/* <div className="Class-offering">
            <a href='/contact'>
              <img className="Class-offering-image" src="https://images.unsplash.com/photo-1611094607507-8c8173e5cf33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="yoga studio"></img>
            </a>
            <h4 className="Bold mt-20">Studio Classes</h4>
            <ul>
              <li>
                <p className="mt-10">Group Classes (max 10 students)</p>
              </li>
              <li>
                <p className='mt-10'>1hr session - 10€ (or 32€ for 4 classes)</p>
              </li>
            </ul>
          </div> */}
          <div className="Class-offering">
            <a href='/contact'>
              <img className="Class-offering-image" src="https://images.unsplash.com/photo-1567281105113-a9b2effdc9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="two women in a yoga studio"></img>
            </a>
            <h4  className="Bold mt-20">One on One Classes</h4>
            <ul>
              <li>
                <p className="mt-10">1hr - $50</p>
              </li>
              <li>
                <p className="mt-10">Online 1hr - $35</p>
              </li>
              <li>
                <p className="mt-10">Inquiries through contact page</p>
              </li>
            </ul>
          </div>
          <div className="Class-offering">
            <a href='/contact'>
              <img className="Class-offering-image" src="https://images.unsplash.com/photo-1526718583451-e88ebf774771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="a group does yoga"></img>
            </a>
            <h4 className="Bold mt-20">Private Group Events</h4>
            <ul>
              <li>
                <p className="mt-10">Inquiries through contact page</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default OfferingsPage;
