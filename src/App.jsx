import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<HeroSection/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
