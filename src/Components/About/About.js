import React from 'react'
import './About.css'
import ME from '../../assests/Me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about' >
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
            <div className='about_me_image'>
              <img src={ME} alt='me' ></img>
              </div>
        </div>
        <div className='about_content'>
          <div className='about_cards' >
              <article className='about_card'>
                <FaAward className='about_icon'/>
                  <h5>Exprience</h5>
                  <small>3 Years Exprience</small>
              </article>
              <article className='about_card'>
                <FiUsers className='about_icon'/>
                  <h5>Client</h5>
                  <small>200+ Clients wordwide</small>
              </article>
              <article className='about_card'>
                <VscFolderLibrary className='about_icon'/>
                  <h5>Project</h5>
                  <small>80+ Completed Project</small>
              </article>
          </div>
          <p>
          Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken
          </p>
          <a href='#contact' className='btn btn_primary'> Let's Talk</a>
        </div>
      </div>  
    </section>
  )
}

export default About