import { useEffect, useState, useRef } from "react";
import "./Gallery.css";

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";

const images = [
  {
    src: img1,
    alt: "Artwork 1",
    caption: "Short caption for artwork 1",
  },
  {
    src: img3,
    alt: "Artwork 3",
    caption: "Short caption for artwork 3",
  },
  {
    src: img4,
    alt: "Artwork 4",
    caption: "Short caption for artwork 4",
  },
];

export default function Gallery() {

  const [currentImage, setCurrentImage] = useState(0);

  const [nextImage, setNextImage] = useState(1);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const intervalRef = useRef(null);

  const timeoutRef = useRef(null);

  useEffect(() => {

    intervalRef.current = setInterval(() => {

      setIsTransitioning(true);

      timeoutRef.current = setTimeout(() => {

        setCurrentImage((prev) => {

          const newCurrent = (prev + 1) % images.length;

          setNextImage((newCurrent + 1) % images.length);

          return newCurrent;

        });

        setIsTransitioning(false);

      }, 800);

    }, 5000);

    return () => {

      clearInterval(intervalRef.current);

      clearTimeout(timeoutRef.current);

    };

  }, []);

  return (

    <div className="gallery">

      <img

        key={`current-${images[currentImage].src}`}

        src={images[currentImage].src}

        alt={images[currentImage].alt}

        className={`gallery-image current ${

          isTransitioning ? "fade-out" : ""

        }`}

      />

      <img

        key={`next-${images[nextImage].src}`}

        src={images[nextImage].src}

        alt={images[nextImage].alt}

        className={`gallery-image next ${isTransitioning ? "fade-in" : ""}`}

      />

      <div className="gallery-caption">

        <p>{images[currentImage].caption}</p>

      </div>

    </div>

  );

}