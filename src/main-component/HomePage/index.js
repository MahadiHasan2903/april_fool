import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/hero";
import Features from "../../components/Features";
import About from "../../components/about";
import Services from "../../components/Services";
import Pricing from "../../components/Pricing";
import FunFact from "../../components/FunFact";
import Projects from "../../components/Projects";
import Testimonial from "../../components/Testimonial";
import Support from "../../components/Support";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Pricing />
      <FunFact fnClass={"wpo-fun-fact-section-s2"} />
      <Projects />
      <Testimonial />
      {/* <Support /> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
