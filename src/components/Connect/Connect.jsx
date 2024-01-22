import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Connect.scss';

const Connect = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container" data-aos="fade-up">
      <div className="connect-title" data-aos="fade-up">
        <p>ПОЛУЧИТЬ </p>
        <p className="istom-text">КОНСУЛЬТАЦИЮ</p>
      </div>
      <div className="connect" data-aos="fade-up">
        <div className="connect-left" data-aos="fade-right">
          <div className="con-left-title">
            <p>ПОЛУЧИТЬ </p>
            <p className="istom-text">КОНСУЛЬТАЦИЮ</p>
          </div>
          <p className="con-left-subtitle">
            Оставьте заявку и в ближайшее время мы с Вами свяжемся
          </p>
          <div data-aos="fade-up">
            <p>Ваше имя</p>
            <input className="connect-name" type="text" placeholder="10" />
          </div>
          <div data-aos="fade-up">
            <p>Ваш номер</p>
            <input className="connect-number" type="text" placeholder="10" />
          </div>
          <div data-aos="fade-up">
            <p>Ваш вопрос</p>
            <input className="connect-quest" type="text" placeholder="10" />
          </div>
          <button className="connect-button istom-btn" data-aos="fade-up">
            Получить консультацию
          </button>
          <p className="connect-done" data-aos="fade-up">
            Нажимая кнопку, вы даете согласие на обработку персональных данных
          </p>
        </div>
        <div className="connect-right" data-aos="fade-left">
          <div className="connect-video"></div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
