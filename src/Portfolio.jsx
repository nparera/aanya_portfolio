import './Portfolio.css'
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg"

const projects = []

export default function Portfolio() {

    return(
        <div className='portfolio-wrapper'>
            <h1 className='portfolio-heading'>PORTFOLIO</h1>
            <div className='card-wrapper'>
                <div className='card'>
                    <p className='card-number'>01</p>
                    {/* <img className='card-image' src={img1} alt='img1'></img> */}
                    <div className='card-image1'></div>
                    <p className='card-title'>WORKS</p>
                    <p className='card-subtitle'>work description/dates etc</p>
                </div>
                <div className='card'>
                    <p className='card-number'>02</p>
                    {/* <img className='card-image' src={img2} alt='img2'></img> */}
                    <div className='card-image2'></div>
                    <p className='card-title'>FROM MY SKETCHBOOK</p>
                    <p className='card-subtitle'>work description/dates etc</p>
                </div>
                <div className='card'>
                    <p className='card-number'>03</p>
                    {/* <img className='card-image' src={img3} alt='img3'></img> */}
                    <div className='card-image3'></div>
                    <p className='card-title'>BITTIKAKE + TITTRA</p>
                    <p className='card-subtitle'>work description/dates etc</p>
                </div>
                <div className='card'>
                    <p className='card-number'>04</p>
                    {/* <img className='card-image' src={img4} alt='img4'></img> */}
                    <div className='card-image4'></div>
                    <p className='card-title'>PUBLICATIONS & WRITING</p>
                    <p className='card-subtitle'>work description/dates etc</p>
                </div>
                <div className='card'>
                    <p className='card-number'>05</p>
                    {/* <img className='card-image' src={img5} alt='img5'></img> */}
                    <div className='card-image5'></div>
                    <p className='card-title'>EXHIBITIONS</p>
                    <p className='card-subtitle'>work description/dates etc</p>
                </div>
            </div>
        </div>



    );
}