import './App.css';
import{Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
    </div>
  );
}

export default App;
