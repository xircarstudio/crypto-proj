import React from "react";
import Hero from "./Hero";
import How from "./How";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Cta from "./Cta";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <section id="home" className="w-full">
        <Hero />
      </section>
      <section id="how">
        <How />
      </section>

      <section id="">
        <Testimonial />
      </section>
      <section id="faq">
        <Faq />
      </section>

      <section id="contact">
        <Cta />
      </section>

      <Footer />
    </>
  );
};

export default Home;
