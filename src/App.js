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
          <p className='provide'>Providing proficient and responsive web applications suiting customer needs</p>
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
        <p class="card-text"></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://cdn-icons-png.flaticon.com/512/9414/9414296.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Web Development</h5>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="../images/seo.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Google SEO</h5>
        <p class="card-text"></p>
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
        <div className='jinakubwaa'>
        <h2>PORTFOLIO </h2>
        <p><span>MY</span>Career</p>
        </div>

        <div className='myportfoliocont'>
        <div class="row row-cols-1 row-cols-md-2 g-3">
  
  <div class="col">
  <a href='https://luxuryliquors.netlify.app' target='_blank' rel='noopener noreferrer'>
    <div class="card">
      <img src="../images/liquors.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Luxury Liquors</h5>
        <p class="card-text">Introducing "LuxuryLiquors" – your premier destination for top-tier spirits delivered straight to your doorstep. With a sleek interface and curated selection, LiquorLux offers a seamless shopping experience. From rare finds to beloved classics, discover your next favorite drink with us. Cheers to convenience and quality with LiquorLux.</p>
        <a href='https://mwanazbites.netlify.app' target='_blank' rel='noopener noreferrer' className='viewpro'>View Project <i class="fa-solid fa-arrow-right fa-beat"></i></a>
      </div>
    </div>
    </a>
  </div>


  <div class="col">
  <a href='https://mwanazbites.netlify.app' target='_blank' rel='noopener noreferrer'>
    <div class="card">
      <img src="../images/mwanaz.png"  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Mwanaz Bites</h5>
        <p class="card-text">Introducing "Mwanaz Bites" – your culinary haven for delicious delights. With Mwanaz Bites, explore a world of flavors right at your fingertips. From hearty breakfasts to gourmet lunches, savor every bite with our mouthwatering menu. Whether you're craving comfort classics or adventurous eats, indulge your taste buds at Mwanaz Bites. Your culinary journey awaits.</p>
        <a href='https://mwanazbites.netlify.app' target='_blank' rel='noopener noreferrer' className='viewpro'>View Project <i class="fa-solid fa-arrow-right fa-beat"></i></a>
      </div>
    </div>
    </a>
   
  </div>


  <div class="col">
  <a href='https://kamidental.netlify.app' target='_blank' rel='noopener noreferrer'>
    <div class="card">
      <img src="../images/kamident.png"  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Kamident Dental </h5>
        <p class="card-text">Introducing "Kamident Dental" – your trusted partner for dental wellness. At Kamident Dental, we're dedicated to your oral health and radiant smiles. From routine check-ups to specialized treatments, our expert team provides personalized care with a gentle touch. Experience comfort, confidence, and care at Kamident Dental. Your journey to a brighter smile begins here.</p>
        <a href='https://kamidental.netlify.app' target='_blank' rel='noopener noreferrer' className='viewpro'>View Project <i class="fa-solid fa-arrow-right fa-beat"></i></a>
      </div>
    </div>
    </a>
   
  </div>


  <div class="col">
  <a href='https://ameerahorganics.netlify.app' target='_blank' rel='noopener noreferrer'>
    <div class="card">
      <img src="../images/ameerah.png"  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Ameerah Organics</h5>
        <p class="card-text">Introducing "Ameerah Organics" – your natural beauty destination. At Ameerah Organics, we believe in the power of nature to nurture your skin. Explore our range of organic cosmetics, crafted with care to enhance your natural radiance. From skincare essentials to makeup must-haves, indulge in pure, clean beauty with Ameerah Organics. Let your inner glow shine with confidence.</p>
        <a href='https://ameerahorganics.netlify.app' target='_blank' rel='noopener noreferrer' className='viewpro'>View Project <i class="fa-solid fa-arrow-right fa-beat"></i></a>

      </div>
    </div>
    </a>
  
  </div>


  <div class="col">
  <a href='https://kitiyangu.netlify.app' target='_blank' rel='noopener noreferrer'>
    <div class="card">
      <img src="../images/kitiyangu.png"  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Kiti yangu Furnitures</h5>
        <p class="card-text">Introducing "Kiti Yangu" – your sanctuary of style and comfort. At Kiti Yangu Furnitures, we redefine relaxation with our curated collection of furniture pieces. From sleek modern designs to timeless classics, discover furnishings that elevate your space and soothe your soul. Create your haven of comfort and style with ComfortHaven. Transform your home into a sanctuary of relaxation and beauty.</p>
        <a href='https://kitiyangu.netlify.app' target='_blank' rel='noopener noreferrer' className='viewpro'>View Project <i class="fa-solid fa-arrow-right fa-beat"></i></a>
      </div>
    </div>
    </a>
  </div>

  <div class="col">
    <Link >
    <div class="card">
      <img src="../images/magunas.png"  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Magunas Supermarket</h5>
        <p class="card-text">
Introducing "Magunas Supermarket" – your one-stop shop for fresh groceries and everyday essentials. At Magunas Supermarket, we're committed to quality, convenience, and community. Explore our aisles stocked with farm-fresh produce, pantry staples, and household necessities. With friendly service and competitive prices, Magunas Supermarket makes grocery shopping a breeze. Experience the freshness at Magunas Supermarket – where every visit feels like home.</p>
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
