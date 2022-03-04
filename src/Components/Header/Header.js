import React from 'react'
import ME from '../../assests/ME3.png'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './Header.css'


function Header() {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Saeid Alizadeh</h1>
        <h5 className='text-light'>FrontEnd Developer</h5>
        <h5 className='text-light'>UI/UX Designer</h5>

        <CTA />
        <div>
          <img src={ME} alt='me' className='me'></img>
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
        <HeaderSocials />

      </div>

    </header>
  )
}

export default Header