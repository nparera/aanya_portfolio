import './Projects.css'
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg"

const projects = []

export default function Projects() {

    return(
        <>
            <div className='grid-container'>
                <div className='grid-item'><img src={img1} alt='img'></img>WORKS</div>
                <div className='grid-item'><img src={img2} alt='img'></img>FROM MY SKETCHBOOK</div>
                <div className='grid-item'><img src={img3} alt='img'></img>BITTIKAKE + TITTRA </div>
                <div className='grid-item'><img src={img4} alt='img'></img>PUBLICATIONS & WRITING</div>
                <div className='grid-item'><img src={img5} alt='img'></img>EXHIBITIONS</div>
            </div>
        </>



    );
}

