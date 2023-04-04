import React from 'react';
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import './Pages.css'

function AboutPage() {
  return (
    <div>
      <Navbar />
      <h1 className="About-me-title">About Me</h1>
      <section className="Flex Light-background">
        <img className="Zoe-portrait" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80" alt="Zoe Kline"></img>
        <div className="Flex-column About-me-text">
          <h4>Hey I'm Zoë!</h4>
          <p>Lorem Ipsum e de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente .</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default AboutPage;
