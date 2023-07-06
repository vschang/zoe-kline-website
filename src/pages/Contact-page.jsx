import React, {useEffect, useRef} from 'react';
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import { Icon } from '@iconify/react';
import { Element } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Map from '../Map.jsx'

function ContactPage() {
  const formRef = useRef(null)
  const firstnameRef = useRef(null)
  const lastnameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

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

  const handleSuccess = () => {
    toast.success('Message sent successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: false,
      progress: undefined,
    });
  };

  const handleError = () => {
    toast.success('Message sent successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: false,
      progress: undefined,
    });
  };

  function sendEmail(e){
    e.preventDefault()
    window.Email.send({
        Host : "smtp.elasticemail.com",
        Username : "zoekline4@gmail.com",
        Password : process.env.REACT_APP_SMTP_KEY,
        To : 'zoekline4@gmail.com',
        From : 'zoekline4@gmail.com',
        Subject : 'New Yoga Inquiry',
        Body : `${messageRef.current.value} - sent by: ${firstnameRef.current.value} ${lastnameRef.current.value} from the email address: ${emailRef.current.value}`
    }).then(function (message) {
      console.log(message)
      handleSuccess()
    }).catch(error => {
      console.log(error)
      handleError()
    })
    formRef.current.reset()
  }

  return (
    <div className="Gradient-background">
      <Navbar />
      <div className="About-me-container">
        <h1 className="About-me-title">Contact Page</h1>
      </div>
      <ToastContainer />
      <section className="Desktop-mobile-flex Justify-between Contact-container mt-40">
        <div className="ml-40">
          <h2 className="mb-20 Dark-grey-text">Contact me.</h2>
          <div className="Flex-column">
            <p className="Dark-grey-text"><a className="no-underline" href="mailto: zoekline4@gmail.com">zoekline4@gmail.com</a></p>
            <p className="Dark-grey-text mt-10"><a className="no-underline" href="tel:19255483881">925 548 3881</a></p>
          </div>
          <div className="Flex mt-30">
            <a href="https://www.instagram.com/zoekline.yoga/" target="_blank" rel="noreferrer">
              <Icon className="Dark-grey-text" icon="mdi:instagram" />
            </a>
          </div>
        </div>
        <form ref={formRef} onSubmit={(e) => sendEmail(e)} className="Contact-form mr-40 mt-40">
          <label>Name</label>
          <div className="Flex">
            <div className="Flex-column Flex-1">
              <input ref={firstnameRef} type="text" id="fname" name="firstname" placeholder="First"></input>
              <label htmlFor="fname" className="Sm-label" required>First Name</label>
            </div>
            <div className="Flex-column Flex-1 ml-10">
              <input ref={lastnameRef} type="text" id="lname" name="lastname" placeholder="Last"></input>
              <label htmlFor="lname" className="Sm-label">Last Name</label>
            </div>
          </div>
          <div className="Flex-column">
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="text" id="email" name="email" placeholder="name@email.com" required></input>

            <label htmlFor="message">Message</label>
            <textarea ref={messageRef} id="message" name="message" placeholder="Your message here" required></textarea>

            <input className="Button mt-20" type="submit" value="Send"></input>
          </div>
        </form>
      </section>
      <Element className="animate-on-scroll">
        <section className="location-section">
          <div className="Location-info Flex-column">
            <h3>Location</h3>
            <a className="no-underline" href="https://goo.gl/maps/2RDGkciCTqUQj28u7" target="_blank" rel="noreferrer">
              <p className="mt-10">Livermore, California</p>
              <p className="mt-10">94550</p>
            </a>
          </div>
          {/* <Map /> */}
          <iframe width="600" height="450" style={{border: 0}} loading="lazy"
            allowFullScreen title="map of Livermore, California"
            src="https://www.google.com/maps/embed/v1/place?q=Livermore%2C%20CA%2C%20USA&key=AIzaSyB9XMZIJvRdeAvmsshwaKdSpA5HXMnPM2A">
          </iframe>
        </section>
      </Element>
      <Footer />
    </div>
  )
}

export default ContactPage;
