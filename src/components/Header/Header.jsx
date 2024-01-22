import logo from "../../assets/images/logo.svg";
import fb from "../../assets/images/facebook-icon.svg";
import tg from "../../assets/images/tg-icon.svg";
import wp from "../../assets/images/wp-icon.svg";
import cart from "../../assets/images/cart.svg";

import './Header.scss'

export const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <img src={logo} alt="" />
          </div>
          <div className="header-title">
            <p>Магазин</p>
            <p>Оплата и доставка</p>
            <p>О нас</p>
            <p>Контакты</p>
          </div>
          <div className="header-search">
            <input type="text" placeholder="поиск товара" />
          </div>
          <div className="header-net">
            <div className="header-net-icon">
              <img className="net-icon" src={fb} alt="" />
            </div>
            <div className="header-net-icon">
              <img className="net-icon" src={tg} alt="" />
            </div>
            <div className="header-net-icon">
              <img className="net-icon" src={wp} alt="" />
            </div>
          </div>
          <div className="header-cart">
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
