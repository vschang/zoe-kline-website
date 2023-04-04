import React from 'react';
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'

function OfferingsPage() {
  return (
    <div>
      <Navbar />
      <div className="Offerings-page">
        <h1>Offerings</h1>
        <div className="Class-offerings">
          <div className="Class-offering">
            <img src="https://images.unsplash.com/photo-1611094607507-8c8173e5cf33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="yoga studio"></img>
            <h4>Studio Classes</h4>
            <p>Group Classes (max 10 students)</p>
            <p className='Text-center'>1hr session - 10€ (or 32€ for 4 classes)</p>
          </div>
          <div className="Class-offering">
            <img src="https://images.unsplash.com/photo-1567281150864-5296ada11f3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="a woman does yoga"></img>
            <h4>Private Classes</h4>
            <p>1hr - 40€</p>
            <p>Online 1hr - 24€</p>
            <p>Inquiries through contact page</p>
          </div>
          <div className="Class-offering">
            <img src="https://images.unsplash.com/photo-1526718583451-e88ebf774771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="a group does yoga"></img>
            <h4>Private Group Events</h4>
            <p>Inquiries through contact page</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default OfferingsPage;