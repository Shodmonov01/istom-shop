import { ProductCard } from "../ProductCard/ProductCard";
import amir from "../../assets/images/img2.png";

import React, { useEffect } from 'react';
import AOS from 'aos';

import "./Promotion.scss";

const data = [
  {
    img: amir,
    title: "Перчатки Боксерские",
    cost: "180.000 uzs",
    id: 0,
  },
  {
    img: amir,
    title: "Перчатки Боксерские",
    cost: "180.000 uzs",
    id: 0,
  },
  {
    img: amir,
    title: "Перчатки Боксерские",
    cost: "180.000 uzs",
    id: 0,
  },
  {
    img: amir,
    title: "Перчатки Боксерские",
    cost: "180.000 uzs",
    id: 0,
  },
];
export const Promotion = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container" data-aos="fade-up">
        <div className="promotion" data-aos="fade-up">
          <div className="promotion-title" data-aos="fade-up">
            <p> Наши Акции!</p>
          </div>

          <div className="promotion-container" data-aos="fade-up">
            {data.map((card, i) => (
              <ProductCard
                productimg={card.img}
                title={card.title}
                quant={card.cost}
                subtitle="Some subtitle"
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
