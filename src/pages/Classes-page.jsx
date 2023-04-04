import React from 'react';
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'

function ClassesPage() {
  return (
    <div className="Page">
      <Navbar />
      <h1 className="About-me-title">My Classes</h1>
      <section className="Flex Light-background Height-40 Align-center">
        <img className="Classes-image" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="yoga class"></img>
        <div className="Flex-column About-me-text ml-40">
          <h3>Style of Classes</h3>
          <p>Lorem Ipsum e de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente .</p>
        </div>
      </section>
      <section className="Flex Light-background Row-reverse Height-40 Align-center">
        <img className="Classes-image" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="yoga class"></img>
        <div className="Flex-column Classes-text mr-40">
          <h3>Style of Classes</h3>
          <p>Lorem Ipsum e de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente .</p>
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
