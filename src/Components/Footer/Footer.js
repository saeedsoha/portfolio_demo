import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <footer id='footer'>
        <a href='#' className='footer_logo'>EGATOR</a>
        <ul className='permalinks'>
          <li><a href='#'></a>Home</li>
          <li><a href='#about'></a>About</li>
          <li><a href='#experience'></a>Experience</li>
          <li><a href='#services'></a>Services</li>
          <li><a href='#portfolio'></a>Portfolio</li>
          <li><a href='#testimunius'></a>Testimunius</li>
          <li><a href='#contact'></a>Contact</li>
        </ul>

        <div className='footer_socials'>
          <a href='https://facebook.com'><FaFacebookF/></a>
          <a href='https://instagram.com'><FiInstagram/> </a>
          <a href='https://twitter.com'><IoLogoTwitter/></a>
        </div>


        <div className='copyright'>
          <small>@Copy All reserved </small>
        </div>
    </footer>
  )
}

export default Footer