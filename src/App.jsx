import './App.css'
import Nav from './Nav';
import { useState, useEffect } from 'react';
import heroImg from './assets/img1.jpg'
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import { useLocation } from 'react-router-dom'


function App() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const location = useLocation()
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
    useEffect(() => {
      const sectionId = location.state?.scrollTo

      if (sectionId) {
        requestAnimationFrame(() => {
          document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        })
      }
    }, [location.state])
  return (
    <>
      <Nav isHeroVisible={isHeroVisible}></Nav>
      <section id='hero'>
        <div className='hero'>
            <a href="#portfolio">
              
              <img id='heroImg' src={heroImg} alt='Artwork by Aanya Mittra'></img>
            </a>
          <h1 className='hero-title'>Aanya Mittra</h1>
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