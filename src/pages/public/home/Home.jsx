import React from "react";
import Hero from "./Hero";
import How from "./How";

const Home = () => {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="how">
        <How />
      </section>
      <section id="faq">
        <How />
      </section>
      <section id="contact">
        <How />
      </section>
      <section id="">
        <How />
      </section>
    </main>
  );
};

export default Home;
