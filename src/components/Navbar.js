import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navcontainer'>
     <div className='navwrapper'>

     <div className='portfolio'>
            <h2> <Link to='/'>Portfolio</Link></h2>
        </div>
        <div className='linkto'>
       <Link to='/about'>About</Link>
       <Link to='/blog'>Work</Link>
       <Link to='/contact'>Contact</Link>

        </div>
       
      
     </div>
    </div>
  )
}

export default Navbar
