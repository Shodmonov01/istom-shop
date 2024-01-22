import "./ProductCard.scss";

export const ProductCard = ({ productimg, title, quant, subtitle }) => {
  return (
    <>
      <div className="productcard">
        <img className="productcard-img" src={productimg} alt="" />

        <p className="productcard-title">{title}</p>
        <p className="productcard-quant">Кол-во {quant} шт</p>
        <div className="subtitle-border">
          <p className="productcard-subtitle">{subtitle}</p>
        </div>

        <div className="productcard-btn">
          <button className=" istom-btn">В корзинку</button>
        </div>
      </div>
    </>
  );
};
