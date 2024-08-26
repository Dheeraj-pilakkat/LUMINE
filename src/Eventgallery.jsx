import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'

import "./Eventgallery.css"
function Eventgallery(props) {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(1000)])

  return (
    <section className="embla">
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((value,index) => (
          <div className="embla__slide" key={index}>
            <div className="embla__slide__number"><img src={value.src} alt={value.src} className="imge" /></div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
export default Eventgallery;