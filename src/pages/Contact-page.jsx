import {React, useEffect} from 'react';
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import { Icon } from '@iconify/react';
import { Element } from 'react-scroll';
import Map from '../Map.jsx'

function ContactPage() {
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
      <div className="About-me-container">
        <h1 className="About-me-title">Contact Page</h1>
      </div>
      <section className="Desktop-mobile-flex Justify-between Contact-container mt-40">
        <div className="ml-40">
          <h2 className="mb-20 Dark-grey-text">Contact me.</h2>
          <div className="Flex-column">
            <p className="Dark-grey-text"><a className="no-underline" href="mailto: zoekline4@gmail.com">zoekline4@gmail.com</a></p>
            <p className="Dark-grey-text mt-10"><a className="no-underline" href="tel:34603846448">+34 603 84 64 48</a></p>
          </div>
          <div className="Flex mt-30">
            <a href="https://www.instagram.com/zoekline.yoga/" target="_blank" rel="noreferrer">
              <Icon className="Dark-grey-text" icon="mdi:instagram" />
            </a>
            <a href="/" className="ml-10">
              <Icon className="Dark-grey-text" icon="ri:facebook-fill" />
            </a>
          </div>
        </div>
        <form className="Contact-form mr-40 mt-40" action="src/form-process.php" method="POST">
        {/* <form className="Contact-form mr-40 mt-40" action="/action_page.php" method="get"> */}
          <label>Name</label>
          <div className="Flex">
            <div className="Flex-column Flex-1">
              <input type="text" id="fname" name="firstname"></input>
              <label htmlFor="fname" className="Sm-label">First Name</label>
            </div>
            <div className="Flex-column Flex-1 ml-10">
              <input type="text" id="lname" name="lastname"></input>
              <label htmlFor="lname" className="Sm-label">Last Name</label>
            </div>
          </div>
          <div className="Flex-column">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email"></input>

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>

            <input className="Button" type="submit" value="Send"></input>
          </div>
        </form>
      </section>
      <Element className="animate-on-scroll">
        <section className="location-section">
          <div className="Location-info Flex-column">
            <h3>Location</h3>
            <a className="no-underline" href="https://goo.gl/maps/dmoChE2q3KaghjDLA" target="_blank" rel="noreferrer">
              <p className="mt-10">Churruca Gym Club</p>
              <p className="mt-10">Calle Churruca, 12</p>
              <p className="mt-10">Madrid Centro 28004</p>
            </a>
          </div>
          <Map />
        </section>
      </Element>
      <Footer />
    </div>
  )
}

export default ContactPage;
