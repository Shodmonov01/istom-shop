import React, { useEffect } from 'react';
import AOS from 'aos';

import { Swiper, SwiperSlide } from 'swiper/react';
import woman from '../../assets/images/woman.png'


import "./BannerCarousel.scss";
import "swiper/css";
import "swiper/css/navigation";

export const BannerCarousel = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (

    <>
      <div className="container">
        <div className="bannercarousel" data-aos="fade-up">
          <Swiper
            // modules={[Navigation]}
            // spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            // navigation
          >
            <SwiperSlide>
              <div className="carousel-card">
                <div className="carousel-card-left">
                  <p className="carousel-title">Отбеливание зубов</p>
                  <p className="carousel-subtitle">Достигните белоснежной улыбки с нашей линейкой инструментов от ведущих производителей</p>
                  <button className="carousel-btn">Подробнее</button>
                </div>
                <div className="carousel-card-right">
                    <img src={woman} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="carousel-card">
                <div className="carousel-card-left">
                  <p className="carousel-title">Отбеливание зубов</p>
                  <p className="carousel-subtitle">Достигните белоснежной улыбки с нашей линейкой инструментов от ведущих производителей</p>
                  <button className="carousel-btn">Подробнее</button>
                </div>
                <div className="carousel-card-right">
                    <img src={woman} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="carousel-card">
                <div className="carousel-card-left">
                  <p className="carousel-title">Отбеливание зубов</p>
                  <p className="carousel-subtitle">Достигните белоснежной улыбки с нашей линейкой инструментов от ведущих производителей</p>
                  <button className="carousel-btn">Подробнее</button>
                </div>
                <div className="carousel-card-right">
                    <img src={woman} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="carousel-card">
                <div className="carousel-card-left">
                  <p className="carousel-title">Отбеливание зубов</p>
                  <p className="carousel-subtitle">Достигните белоснежной улыбки с нашей линейкой инструментов от ведущих производителей</p>
                  <button className="carousel-btn">Подробнее</button>
                </div>
                <div className="carousel-card-right">
                    <img src={woman} alt="" />
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </>
  );
};
