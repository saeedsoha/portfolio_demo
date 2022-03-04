import React from 'react'
import './Testimonius.css'
import { data } from './TestomonialsData'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Testimunius() {
  return (
    <section id='testimunius'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ id, name, review, avatar }) => {
            return (
              <SwiperSlide className='testimonial' key={id}>
                <div className='client_avatar'>
                  <img src={avatar}></img>
                </div>
                <h5 className='cleint_name'>{name}</h5>
                <small className='client_review'> {review} </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimunius