import './App.css';
import{ Link} from 'react-router-dom'
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Blog from './components/Blog';
// import Contact from './components/Contact';
import { useRef } from 'react';

function App() {

  const serviceRef = useRef(null)
  const contactsRef = useRef(null);
  const homeRef = useRef(null);
  const MyWorkref = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({behavior: 'smooth'})
    }
  }


  return (
    <div className="App">
     {/* <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
     </Routes> */}

     <nav>
      <h2 className='sk'>SK<span className='manyala'>.</span></h2>
      <ul>
        <li>
        <button onClick={() => scrollToRef(homeRef)}><Link>Home</Link></button> 
        </li>
        <li>
        <button onClick={() => scrollToRef(serviceRef)}><Link>Service</Link></button> 
        </li>
        <li>
        <button onClick={() => scrollToRef(MyWorkref)}><Link>MyWork</Link></button> 
        </li>
        <li>
        <button onClick={() => scrollToRef(contactsRef)}><Link>Contacts</Link></button> 
        </li>
      </ul>
     </nav>

     <section className='myhome' ref={homeRef}>
      <div className='mwanzilishi'>
        <div className='galilee'>
        <p className='hello'>Hello, i'm </p>
        <h2 className='sk'>SAMUEL <span className='manyala'>KURIA.</span></h2>
        <p className='sooft'>Software Engineer /  <span className='web'>Web Developer</span></p>
        <button className='contactymee' onClick={() => scrollToRef(contactsRef)}><Link>Contact Me</Link></button> 
        </div>
        {/* <div className='homeimg'>
          <img src='../images/picha1.png'alt='mwenyezi'></img>
        </div> */}
        <div className='shortdesi'>
          <p className='intro'>INTRODUCTION</p>
          <h3>UX/UI Designer</h3>
          <h3>Full Stack Web</h3>
          <h3>Developer</h3>
          <p className='provide'>Providing proficient and responsiveness suiting customer needs</p>
        </div>
       
      </div>

      </section>



      <section className='servemeseen' ref={serviceRef}>
        <div className='servme'>
        <h2>Services</h2>
        <h3>What I Do</h3>
        <p>My responsibilities include designing, developing, and maintaining web applications, ensuring their functionality, performance, and security.</p>
        <div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://rdigigosolution.com/wp-content/uploads/2023/06/Whats-the-difference-between-UI-and-UX-Design-Services.webp" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">UX/UI Design</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://cdn-icons-png.flaticon.com/512/9414/9414296.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Web Development</h5>
        <p class="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="../images/seo.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Google SEO</h5>
        <p class="card-text"> is the process of improving the quality and quantity of website traffic.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="../images/digital.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Social Media marketing</h5>
      </div>
    </div>
  </div>
</div>
        </div>
        
        </div>
       
      </section>




      <section className='portfolio' ref={MyWorkref}>
        <div>
        <h2>PORTFOLIO </h2>
        <p><span>MY</span>Career</p>
        </div>

        <div className='myportfoliocont'>
        <div class="row row-cols-1 row-cols-md-2 g-3">
  
  <div class="col">
    <Link to='luxuryliquors.netlify.app'>
    <div class="card">
      <img src="../images/liquors.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Luxury Liquors</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     <Link to='luxuryliquors.netlify.app' className='viewpro'>View Project <i class="fa-solid fa-arrow-right fa-beat"></i></Link>
      </div>
    </div>
    </Link>
  </div>


  <div class="col">
    <Link to='mwanazbites.netlify.app'>
    <div class="card">
      <img src="../images/mwanaz.png"  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Mwanaz Bites</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to='mwanazbites.netlify.app' className='viewpro'>View Project <i class="fa-solid fa-arrow-right fa-beat"></i></Link>
      </div>
    </div>
    </Link>
   
  </div>


  <div class="col">
    <Link to='kamidental.netlify.app'>
    <div class="card">
      <img src="../images/kamident.png"  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Kamident Dental </h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <Link to='kamidental.netlify.app' className='viewpro'>View Project <i class="fa-solid fa-arrow-right fa-beat"></i></Link>
      </div>
    </div>
    </Link>
   
  </div>


  <div class="col">
    <Link to='ameerahorganics.netlify.app'>
    <div class="card">
      <img src="../images/ameerah.png"  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Ameerah Organics</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to='ameerahorganics.netlify.app' className='viewpro'>View Project <i class="fa-solid fa-arrow-right fa-beat"></i></Link>

      </div>
    </div>
    </Link>
  
  </div>


  <div class="col">
    <Link to='kitiyangu.netlify.app'>
    <div class="card">
      <img src="../images/kitiyangu.png"  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Kiti yangu Furnitures</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to='kitiyangu.netlify.app' className='viewpro'>View Project <i class="fa-solid fa-arrow-right fa-beat"></i></Link>
      </div>
    </div>
    </Link>
  </div>

  <div class="col">
    <Link >
    <div class="card">
      <img src="../images/magunas.png"  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Magunas Supermarket</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link className='viewpro'>View Project <i class="fa-solid fa-arrow-right fa-beat"></i></Link>

      </div>
    </div>
    </Link>
    
  </div>
</div>
        </div>
      

      </section>








      <section className='contactooo' ref={contactsRef}>
        <div className='contactheader'>
        <h2>Contact Me </h2>
        <h3><span>Lets</span> Talk About Ideas</h3>
        </div>
      
        <div className='knowmecontainer'>

          <div className='knowmewrapper'>
          <div className='knowme'>
          <i class="fa-solid fa-address-book"></i>
          <div>
            <h3>address</h3>
            <p>Kenya, Nairobi</p>
          </div>
          </div>
          <div className='knowme'>
          <i class="fa-solid fa-user-check"></i>
          <div>
            <h3>FreeLance</h3>
            <p>Available for higher</p>
          </div>
          </div>
          <div className='knowme'>
          <i class="fa-solid fa-envelope"></i>          <div>
            <h3>Email</h3>
            <p>kungukuria5724@gmail.com</p>
          </div>
          </div>
          <div className='knowme'>
          <i class="fa-solid fa-phone"></i>
          <div>
            <h3>Phone number</h3>
            <p>+254-768-696-986</p>
          </div>
          </div>
          </div>


          <div className='mamboyaform'>

          <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Write me a message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Chat with me" rows="3"></textarea>
</div>
<button className='send'>Send Message</button>
          </div>
        </div>
      </section>





    </div>
  );
}

export default App;
