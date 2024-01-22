import logo from "../../assets/images/logo.svg";

import fb from "../../assets/images/facebook-icon.svg";
import tg from "../../assets/images/tg-icon.svg";
import wp from "../../assets/images/wp-icon.svg";

import "./Footer.scss";

export const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer-nav">
            <h1>Навигация</h1>
            <p>Магазин</p>
            <p>Оплата и доставка</p>
            <p>О нас</p>
            <p>Контакты</p>
          </div>
          <div className="footer-service">
            <h1>Навигация</h1>
            <p>Магазин</p>
            <p>Оплата и доставка</p>
            <p>О нас</p>
            <p>Контакты</p>
          </div>
          <div className="footer-net">
            <p>Мы в социальных сетя</p>
            <div className="net-icons">
              <div className="footer-net-icon">
                <img className="net-icon" src={fb} alt="" />
              </div>
              <div className="footer-net-icon">
                <img className="net-icon" src={tg} alt="" />
              </div>
              <div className="footer-net-icon">
                <img className="net-icon" src={wp} alt="" />
              </div>
            </div>
            <button className="footer-net-btn istom-btn">Обратная связь</button>
          </div>
        </div>
      </div>
    </>
  );
};
