import React from 'react'
import { BsPatchCheckFill, BsPatchCheck } from 'react-icons/bs'
import './Experience.css'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills i Have</h5>
      <h2>My Experience</h2>
      <div className='container container_experience'>
        <div className='frontend'>
          <h2>Frontend Development</h2>
          <div className='experince_items'>
            <div className='experince_item'>
              <BsPatchCheckFill className='experince_item_icon' />
              <div className='experince_item_text'>
                <h3>HTML</h3>
                <h5 className='text-light'>Experienced</h5>
              </div>
            </div>
            <div className='experince_item'>
              <BsPatchCheckFill className='experince_item_icon' />
              <div className='experince_item_text'>
                <h3>CSS</h3>
                <h5 className='text-light'>Experienced</h5>
              </div>
            </div>
            <div className='experince_item'>
              <BsPatchCheckFill className='experince_item_icon' />
              <div className='experince_item_text'>
                <h3>JavaScript</h3>
                <h5 className='text-light'>Experienced</h5>
              </div>
            </div>
            <div className='experince_item'>
              <BsPatchCheckFill className='experince_item_icon' />
              <div className='experince_item_text'>
                <h3>React</h3>
                <h5 className='text-light'>Experienced</h5>
              </div>
            </div>
            <div className='experince_item'>
              <BsPatchCheckFill className='experince_item_icon' />
              <div className='experince_item_text'>
                <h3>Material UI</h3>
                <h5 className='text-light'>Experienced</h5>
              </div>
            </div>
            <div className='experince_item'>
              <BsPatchCheckFill className='experince_item_icon' />
              <div className='experince_item_text'>
                <h3>Tailwind</h3>
                <h5 className='text-light'>Experienced</h5>
              </div>
            </div>

          </div>
        </div>


        
        <div className='frontend'>
          <h2>UI/UX Design</h2>
          <div className='experince_items'>
            <div className='experince_item'>
              <BsPatchCheckFill className='experince_item_icon' />
              <div className='experince_item_text'>
                <h3>Adobe XD</h3>
                <h5 className='text-light'>Experienced</h5>
              </div>
            </div>
            <div className='experince_item'>
              <BsPatchCheckFill className='experince_item_icon' />
              <div className='experince_item_text'>
                <h3>Figma</h3>
                <h5 className='text-light'>Experienced</h5>
              </div>
            </div>
            <div className='experince_item'>
              <BsPatchCheckFill className='experince_item_icon' />
              <div className='experince_item_text'>
                <h3>Photoshop</h3>
                <h5 className='text-light'>Experienced</h5>
              </div>
            </div>
            <div className='experince_item'>
              <BsPatchCheckFill className='experince_item_icon' />
              <div className='experince_item_text'>
                <h3>Illustrator</h3>
                <h5 className='text-light'>Experienced</h5>
              </div>
            </div>
            <div className='experince_item'>
              <BsPatchCheckFill className='experince_item_icon' />
              <div className='experince_item_text'>
                <h3>Lightroom</h3>
                <h5 className='text-light'>Experienced</h5>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience