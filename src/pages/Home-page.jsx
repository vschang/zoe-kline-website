import {React, useEffect} from 'react';
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import Class from '../images/zoe-classes.jpeg'
import { Icon } from '@iconify/react';
import { Element } from 'react-scroll';
import Form from '../Newsletter-form.jsx'
import './Pages.css'

function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 50) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="Gradient-background">
      <Navbar />
      <section className="Dark-background Flex Justify-center">
        <div className="Hero">
          <h1>Yoga for your mind, body and soul.</h1>
          <a href="/" className="Book-a-class-link">Book a Class</a>
        </div>
      </section>
      <Element className="animate-on-scroll">
        <section className="Group-classes-container">
          <h1>Group Classes, Private Classes & Events</h1>
          <div className="Group-classes-image-container">
            <img className="Group-classes-image" src={Class} alt="Zoe Kline does yoga"></img>
          </div>
          <a href="/classes" className="View-more-btn Book-a-class-link">View More
            <Icon className="ml-10" icon="material-symbols:arrow-right-alt-rounded" />
          </a>
        </section>
      </Element>
      <Element className="animate-on-scroll">
        <section className="Newsletter-container Flex-column">
          <Form/>
        </section>
      </Element>
      <Footer />
    </div>
  )
}

export default HomePage;
