import React from "react";
import image from "./Image.jsx";
// import Eventgallery from "./Eventgallery.jsx";
// import ScrollCarousel from "scroll-carousel-react";
function Event(props) {
  return (
    <div className="events" id="event">
      <div className="a_row1">
        <div className="a_head">
          <h1 className="a_h1" id="a_h1">
            Check our past events,
          </h1>
          <p className="a_p" id="e_p">
            To establish an innovation culture among innovators by exposing them
            to cutting –edge technology and establishing the organization as a
            platform for learning and innovation by producing entrepreneurs who
            are technically proficient and skilled.
          </p>
        </div>
      </div>
      {/* <div className="a_row2" id="a_row2">
        <div className="wrapper">
          <ul className="carousel">
            {image.map((value) => (
          
                <li className="cards">
                  <div className="img" key={value.id}>
                    <img src={value.src} alt={value.id} draggable="false" />
                  </div>
                </li>
              
            ))}
          </ul>
        </div> */}
        {/* <div className="e_div">
          <ul className="e_ul">
            {props.data.map((value,index)=>{
              <li className="e_li">
                <img src={value.src} alt={index.id}  />
              </li>
            })}
          </ul>
        </div> */}
         {/* <Eventgallery slides={image} options={options}/> */}
        {/* <Eventgallery data={image}/> */}
        {/* <Eventgallery datas={image}/> */}
              {/* <ScrollCarousel 
      autoplaySpeed={2}
      speed={2}>
        {image.map((value, index) => {
          <div key={index.id}>
              <img src={value.src} alt="" srcset="" width="100%"/>
            </div>;
        })}
      </ScrollCarousel> */}
      {/* </div> */}
    </div>
  );
}

export default Event;
