import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import About from "../../components/about";
import Services2 from "../../components/Services2";
import Pricing from "../../components/Pricing";
import FunFact from "../../components/FunFact";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";

const AboutPage = () => {
  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"About Us"} pagesub={"About"} />
      <About abClass={"wpo-about-section-s2"} />
      <Services2 srvClass={"wpo-service-section-s3"} />
      <Pricing />
      <FunFact fnClass={"section-padding"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;
