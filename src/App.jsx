import './App.css'
import Nav from './Nav';
import { useState, useEffect } from 'react';

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import Gallery from './Gallery';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

function App() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {

      const heroSection = document.getElementById("hero");

      if (!heroSection) return;

      const observer = new IntersectionObserver(

        ([entry]) => {

          setIsHeroVisible(entry.isIntersecting);

        },

        {

          threshold: 0.6,

        }

      );

      observer.observe(heroSection);

      return () => observer.disconnect();

    }, []);
  return (
    <>
      <Nav isHeroVisible={isHeroVisible}></Nav>
      <section id='hero'>
        <div className='hero'>
          <div className='hero-gallery'>
            <a href="#portfolio">
              <Gallery></Gallery>
              {/* <img id="hero-img" src='src/assets/hero-img.jpeg' alt='heroimg'></img> */}
            </a>
          </div>
          <h1 className='hero-title'>Aanya Mittra</h1>
            {/* <img id='img1' src={img2} alt='img1'></img> */}
            {/* <img id='img2' src={img4} alt='img2'></img> */}
            {/* <div id='info'>
                <p>London, UK</p>
                <p>Fine Arts</p>
                <p>Lorem ipsum dolor sit amet, consectetur </p>
                <p>adipiscing elit, sed do eiusmod tempor </p>
                <p>incididunt ut labore et dolore magna aliqua.</p>
            </div> */}
        </div>
      </section>
      <section id='portfolio'>
        <Portfolio></Portfolio>
      </section>
      <section id='about'>
        <About></About>
      </section>
      <section id='contact'>
        <Contact></Contact>
      </section>
    </>
  )
}
export default App;