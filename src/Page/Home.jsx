import React from "react";
import HomeBanner  from "../components/HomeBanner/HomeBanner";
import { Header } from "../components/Header/Header";
import  About from "../components/About/About";
import Service  from "../components/Service/Service";
import Products  from "../components/Products/Products";
import { BannerCarousel } from "../components/BannerCarousel/BannerCarousel";
import { Promotion } from "../components/Promotion/Promotion";
import { PartnersCarousel } from "../components/PartnersCarousel/PartnersCarousel";
import { Footer } from "../components/Footer/Footer";
import Connect from "../components/Connect/Connect";

function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <About />
      <Service />
      <Products />
      <BannerCarousel/>
      <Promotion/>
      <PartnersCarousel/>
      <Connect/>
      <Footer/>
    </>
  );
}

export default Home;
