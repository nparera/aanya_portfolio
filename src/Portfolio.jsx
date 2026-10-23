import './Portfolio.css'
import { Link } from 'react-router-dom'

export default function Portfolio() {

    return(
        <div className='portfolio-wrapper'>
            <h2 className='section-heading'>Portfolio</h2>
            <div className='card-wrapper'>
                <Link to="/portfolio/works" className='card'>
                    <p className='card-number'>01</p>
                    {/* <img className='card-image' src={img1} alt='img1'></img> */}
                    <div className='card-image1'></div>
                    <p className='card-title'>WORKS</p>
                    <p className='card-subtitle'>work description/dates etc</p>
                </Link>
                <Link to="/portfolio/sketchbook" className='card'>
                    <p className='card-number'>02</p>
                    {/* <img className='card-image' src={img2} alt='img2'></img> */}
                    <div className='card-image2'></div>
                    <p className='card-title'>FROM MY SKETCHBOOK</p>
                    <p className='card-subtitle'>work description/dates etc</p>
                </Link>
                <Link to="/portfolio/bittikake-tittra" className='card'>
                    <p className='card-number'>03</p>
                    {/* <img className='card-image' src={img3} alt='img3'></img> */}
                    <div className='card-image3'></div>
                    <p className='card-title'>BITTIKAKE + TITTRA</p>
                    <p className='card-subtitle'>work description/dates etc</p>
                </Link>
                <Link to="/portfolio/publications" className='card'>
                    <p className='card-number'>04</p>
                    {/* <img className='card-image' src={img4} alt='img4'></img> */}
                    <div className='card-image4'></div>
                    <p className='card-title'>PUBLICATIONS & WRITING</p>
                    <p className='card-subtitle'>work description/dates etc</p>
                </Link>
                <Link to="/portfolio/exhibitions" className='card'>
                    <p className='card-number'>05</p>
                    {/* <img className='card-image' src={img5} alt='img5'></img> */}
                    <div className='card-image5'></div>
                    <p className='card-title'>EXHIBITIONS</p>
                    <p className='card-subtitle'>work description/dates etc</p>
                </Link>
            </div>
        </div>



    );
}