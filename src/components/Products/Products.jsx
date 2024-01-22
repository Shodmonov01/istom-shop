import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ProductCard } from "../ProductCard/ProductCard";
import amir from "../../assets/images/img2.png";

import './Products.scss';

const data = [
  {
    img: amir,
    title: "Коронки D LL-6",
    cost: "8",
    id: 0,
  },
  {
    img: amir,
    title: "Коронки D LL-6",
    cost: "8",
    id: 1,
  },
  {
    img: amir,
    title: "Коронки D LL-6",
    cost: "8",
    id: 2,
  },
  {
    img: amir,
    title: "Коронки D LL-6",
    cost: "8",
    id: 3,
  },
];

const Products = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container" data-aos="fade-up">
      <div className="product" data-aos="fade-up">
        <div className="product-title">
          <p> Наши </p>
          <p className="istom-text">Новинки!</p>
        </div>

        <div className="product-container" data-aos="fade-up">
          {data.map((card) => (
            <ProductCard
              productimg={card.img}
              title={card.title}
              quant={card.cost}
              subtitle="Some subtitle"
              key={card.id}
              data-aos="fade-up"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
