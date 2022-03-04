import React from 'react'
import './Portfolio.css'

import { data } from './PortfolioData'




function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className=' container container_portfolio'>
        <div className='portfolio_cards'>
          {
            data.map(({ id, image, title, demo }) => {
              return (
                <div className='portfolio_card hover14' key={id}>
                  <figure><img src={image} alt='' className='portfolio_card_img ' /></figure> 
                 
                  <h5>{title} </h5>
                  <div className='portfolio_card_button '>
                    <button className='btn btn-outlined '>GitHub</button>
                    <button className='btn btn-primary'>LiveDemo</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio