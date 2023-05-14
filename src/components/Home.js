import React from 'react'

function Home() {
  return (
    <div className='homecontainer'>
      <div className='homewrapper'>
         <p>Hey, my name is</p>
         <h3>Samuel Kuria</h3>
         <h5>Software Engineer</h5>

         <div className='story'>
         <p>I am a UI/UX designer who also develops ,tests and maintains software applications which help to meet the needs of users and businesses. </p>
         </div>
         <div className='homebutton'>
          <button className='btn1'>Contact me</button>
          <button  className='btn2'>View Portfolio</button>
         </div>
      </div>
      <div className='homeimg'>
          <img src='https://www.kindpng.com/picc/m/313-3133065_man-face-vector-png-transparent-png.png' alt='mypic'></img>
         </div>
    </div>
  )
}

export default Home
