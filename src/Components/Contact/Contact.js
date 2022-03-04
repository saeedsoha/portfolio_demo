import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import TextField from '@material-ui/core/TextField';
import './Contact.css'
import { withStyles } from '@material-ui/core/styles'


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'var(--color-primary)',
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--color-primary)',
      },
      '&:hover fieldset': {
        borderColor: 'var(--color-light)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--color-primary)',
      },
    },
  },
})(TextField);


function Contact() {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_left '>
          <div className='contact_card' >
            <HiOutlineMail className='contact_card_icon'/>
            <h3>Email</h3>
            <h5>Support@gamil.com</h5>
            <a href='mailto:saeed.e.alizadeh@gmail.com' target='_blank'>send a message</a>
          </div>
          <div className='contact_card'>
            <RiMessengerLine className='contact_card_icon'/>
            <h3>Messanger</h3>
            <h5>Saeed ALZ</h5>
            <a>send a message</a>
          </div>
          <div className='contact_card'>
            <AiOutlineWhatsApp className='contact_card_icon'/>
            <h3>WhatsApp</h3>
            <h5>+1234568</h5>
            <a>send a message</a>
          </div>
        </div>



        <div className='contact_right'>
          <CssTextField
            label="Your Full Name"
            variant="outlined"
            id="custom-css-outlined-input"
            InputLabelProps={{
              style: { color: 'var(--color-light)', fontWeight: 50, fontSize: 15, width: 200, },
            }}
            required
          />
          <CssTextField
            label="Custom CSS"
            variant="outlined"
            id="custom-css-outlined-input"
            InputLabelProps={{
              style: { color: 'var(--color-light)', fontWeight: 50, fontSize: 15 },
            }}
            required
          />
          <CssTextField
            label="Custom CSS"
            multiline
            rows={7}
            variant="outlined"
            id="custom-css-outlined-input"
            InputLabelProps={{
              style: { color: 'var(--color-light)', fontWeight: 50, fontSize: 15 },
            }}
            required
          />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </div>
      </div>
    </section>
  )
}

export default Contact