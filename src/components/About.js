import React from 'react'
function About() {
  return (
    <div className='bigmanabout'>
   <h2 className='aboutheader'>About</h2>
    <div className='row'>
        <div className='col-1'>
            <img src='../images/img1.png' alt='contimage'></img>
        </div>
        <div className='col-2'>
        <div className='abutstory'>
        <p className='p1'>I am Samuel Kuria, a web developer that thrives on bringing ideas to life with code !</p>
      <p className='p1'>I have been fortunate to study at <span>Moringa School</span> and sharpen my skills at Sofware Engineering</p>
      <p className='p1'>The journey has been great and successfull as i am able to create, design, test and maintain code which is very fun.</p>
      <p className='p1'>I have also been fortunate to  work in group projects where i got to learn and get exposed to different individual brilliance</p>
      <p className='p1'>Personally i have fallen in love with <span>React</span>,architect CSS in or out of JavaScript for the front-end development.</p>
      <p className='p1'>I cant miss out on the back-end data architecture that involves writing,testing and maintaining data.I am fluent in Ruby on Rails, Sql, Postgress, ActiveRecord and various </p>
      </div>
        </div>
      </div>
    </div>
  )
}

export default About
