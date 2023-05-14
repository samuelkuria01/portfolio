import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <div className='row'>
        <div className='col-1'>
            <img src='../images/img2.png' alt='contimage'></img>
        </div>
        <div className='col-2'>
        <h2 className='contheader'>Get In Touch</h2>
        <div className='contactus'>
            <div>
            <i class="fa-sharp fa-solid fa-location-dot"></i>
                <h3>Location</h3>
            <p>Kenya, Kahawa Wendani</p>
            </div>

            <div>
            <i class="fa-solid fa-phone-volume"></i>            
                <h3>Phone Number</h3>
            <p>+254 768-696-986</p>
            </div> 

            <div>
            <i class="fa-solid fa-envelope"></i>
                <h3>Email</h3>
            <p>kungukuria5724@gmail.co</p>
            </div>     
        </div>
        <div className='contend'>
            <h4>Reach out and say "Hey!".I look forward to hearing from you!</h4>
        <h4>Stay Awesome</h4>
        <div className='contacticon'>
        <i class="fa-brands fa-instagram" ></i>
        <i class="fa-brands fa-github" ><Link to="https://github.com/samuelkuria01"></Link></i>
        <i class="fa-brands fa-linkedin"></i>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
