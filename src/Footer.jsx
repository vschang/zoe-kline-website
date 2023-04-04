import React from 'react';
import { Icon } from '@iconify/react';
import './Footer.css'

function Footer() {
  return (
    <div className="Footer Light-background">
      <h3 className="mt-40 ml-40">Zoe Kline</h3>
      <div className="Flex-column mt-40">
        <a href="/about">About</a>
        <a href="/">Location</a>
        <a href="/classes">Classes</a>
        <a href="/">Book a Class</a>
      </div>
      <div className="Flex mt-40 mr-40">
        <a href="https://www.instagram.com/zoekline.yoga/" target="_blank" rel="noreferrer">
          <Icon icon="mdi:instagram" />
        </a>
        <a href="/">
          <Icon icon="ri:facebook-fill" />
        </a>
      </div>
    </div>
  )
}

export default Footer;
