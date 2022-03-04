import React from 'react'
import CV from '../../assests/CV.pdf'


function CTA() {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Download CV</a>
        <a href='' className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA