import Slider from "react-slick";


import "./PartnersCarousel.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import partner1 from '../../assets/images/partner1.png'
import partner2 from '../../assets/images/partner2.png'
import partner3 from '../../assets/images/partner3.png'
import partner4 from '../../assets/images/partner4.png'
import partner5 from '../../assets/images/partner5.png'
import partner6 from '../../assets/images/partner6.png'

export const PartnersCarousel = () => {
      const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1};
  return (
    <>
      <div className="container">
        <div className="partnerscarousel">

          <div className="partner-title">
            <p>Наши</p>
            <p className="istom-text">партнёры</p>
          </div>

        <Slider {...settings}>
              <div className="partner-card">
                <img src={partner1} alt="" className="partner-img" />
              </div>

              <div className="partner-card">
              <img src={partner2} alt="" className="partner-img" />              </div>

              <div className="partner-card">
              <img src={partner3} alt="" className="partner-img" />              </div>

              <div className="partner-card">
              <img src={partner4} alt="" className="partner-img" />              </div>

              <div className="partner-card">
              <img src={partner5} alt="" className="partner-img" />              </div>

              <div className="partner-card">
              <img src={partner6} alt="" className="partner-img" />              </div>
          
              </Slider>

          
        </div>
      </div>
    </>
  );
};
