import React, { Component } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../../components/ModalVideo";

import client1 from "../../images/slider/client1.png";
import client2 from "../../images/slider/client2.png";
import client3 from "../../images/slider/client3.png";
import client4 from "../../images/slider/client4.png";

import hero from "../../images/slider/right-img2.png";

class Hero extends Component {
  render() {
    return (
      <section className="wpo-hero-section-1 wpo-hero-section-2">
        <div className="container">
          <div className="row">
            <div className="col col-xs-6 col-lg-6">
              <div className="wpo-hero-section-text">
                <div className="wpo-hero-title-top">
                  <span>Effortless Payroll Solutions for Your Business</span>
                </div>
                <div className="wpo-hero-title">
                  <h2>Streamlining Payroll, Simplifying Compliance</h2>
                </div>
                <div className="wpo-hero-subtitle">
                  <p>
                    Accurate payroll processing, tax compliance, and employee
                    management—all in one place.
                  </p>
                </div>
                <div className="btns">
                  <Link to="/login" className="btn theme-btn">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-vec">
          <div className="right-img">
            <div className="r-img">
              <img src={hero} alt="" />
            </div>
            <div className="wpo-happy-client">
              <div className="wpo-happy-client-text">
                <h3>252+</h3>
                <p>Satisfied Businesses</p>
              </div>
              <div className="wpo-happy-client-img">
                <ul className="wpo-happy-client-slide">
                  <li>
                    <img src={client1} alt="" />
                  </li>
                  <li>
                    <img src={client2} alt="" />
                  </li>
                  <li>
                    <img src={client3} alt="" />
                  </li>
                  <li>
                    <img src={client4} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pop-up-video">
          <div className="video-holder">
            <VideoModal />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
