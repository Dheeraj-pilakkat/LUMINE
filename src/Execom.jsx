import React from "react";
import ScrollCarousel from "scroll-carousel-react";
// import './main.js'
import members from "./Members";
import Execomslider from "./Execomslider";
function Execom(props) {
  return (
    <div>
      <div className="execom" id="execom">
        <h1 className="e_h1">Meet our team</h1>
        <div className="exe_row">
          <div className="staff">
            <div className="staff_card">
              <div className="img">
                <img src="" alt="" />
              </div>
              <div className="staff_sec">
                <h1>Faisal</h1>
                <p>Nodal officer</p>
              </div>
            </div>
            <div className="staff_card">
              <div className="img">
                <img src="" alt="" />
              </div>
              <div className="staff_sec">
                <h1>Shilja.</h1>
                <p>Nodal officer</p>
              </div>
            </div>
          </div>
          <ScrollCarousel autoplay autoplaySpeed={9} speed={9}>
            {members.map((value) => (
              <div key={value.id} className="card">
                  <div class="img-bx">
                    <img src={value.img} className="imga" alt="img" />
                  </div>
                  <div class="content">
                    <div class="detail">
                      <h2>
                        {value.name}
                        <br />
                        <span>{value.post}</span>
                      </h2>
                      <ul class="sci">
                        <li>
                          <a href="#">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
        
            ))}
          </ScrollCarousel>
        </div>
      </div>
      <div className="staffs"></div>
    </div>
  );
}

export default Execom;
