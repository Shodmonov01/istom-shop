import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Service.scss';

import service1 from "../../assets/images/service1.svg";
import service2 from "../../assets/images/service2.svg";
import service3 from "../../assets/images/service3.svg";
import service4 from "../../assets/images/service4.svg";
import service5 from "../../assets/images/service5.svg";
import service6 from "../../assets/images/service6.svg";
import service7 from "../../assets/images/service7.svg";
import service8 from "../../assets/images/service8.svg";
import service9 from "../../assets/images/service9.svg";
import service10 from "../../assets/images/service10.svg";

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container" data-aos="fade-up">
      <div className="service" data-aos="fade-up">
        <div className="service-title">
          <p>Наши </p><br />
          <p className="istom-text">Услуги!</p>
        </div>
        <div className="service-cards" data-aos="fade-up">
          <div className="service-column" data-aos="fade-up">
            <div className="ser-card" data-aos="fade-up">
              <img className="ser-card-img" src={service1} alt="Service 1" />
              <p className="ser-card-subtitle">Стоматологические материалы</p>
            </div>
            <div className="ser-card" data-aos="fade-up">
              <img className="ser-card-img" src={service2} alt="Service 2" />
              <p className="ser-card-subtitle">Стоматологическое оборудование</p>
            </div>
            <div className="ser-card" data-aos="fade-up">
              <img className="ser-card-img" src={service3} alt="Service 3" />
              <p className="ser-card-subtitle">Стоматологическое инструменты</p>
            </div>
            <div className="ser-card" data-aos="fade-up">
              <img className="ser-card-img" src={service4} alt="Service 4" />
              <p className="ser-card-subtitle">Зуботехнические материалы</p>
            </div>
            <div className="ser-card" data-aos="fade-up">
              <img className="ser-card-img" src={service5} alt="Service 5" />
              <p className="ser-card-subtitle">Эндодонтические Инструменты</p>
            </div>
          </div>

          <div className="service-column" data-aos="fade-up" data-aos-delay="100">
            <div className="ser-card" data-aos="fade-up">
              <img className="ser-card-img" src={service6} alt="Service 6" />
              <p className="ser-card-subtitle">Расходные материалы</p>
            </div>
            <div className="ser-card" data-aos="fade-up" data-aos-delay="100">
              <img className="ser-card-img" src={service7} alt="Service 7" />
              <p className="ser-card-subtitle">Анестезия</p>
            </div>
            <div className="ser-card" data-aos="fade-up" data-aos-delay="200">
              <img className="ser-card-img" src={service8} alt="Service 8" />
              <p className="ser-card-subtitle">Ортопедия</p>
            </div>
            <div className="ser-card" data-aos="fade-up" data-aos-delay="200">
              <img className="ser-card-img" src={service9} alt="Service 9" />
              <p className="ser-card-subtitle">Хирургия</p>
            </div>
            <div className="ser-card" data-aos="fade-up" data-aos-delay="300">
              <img className="ser-card-img" src={service10} alt="Service 10" />
              <p className="ser-card-subtitle">Дезинфекция и стерилизация</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
