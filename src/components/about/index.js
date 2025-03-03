import React from "react";
import { Link } from "react-router-dom";
import abimg from "../../images/about.jpg";
import spimg1 from "../../images/ab-shape-1.png";
import spimg2 from "../../images/ab-shape-2.png";
import spicon from "../../images/icon/badge.svg";
import sign from "../../images/signeture.png";

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <section className={`wpo-about-section ${props.abClass}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="wpo-about-wrap">
              <div className="wpo-about-img">
                <img src={abimg} alt="" />
                <div className="wpo-ab-shape-1">
                  <img src={spimg1} alt="" />
                </div>
                <div className="wpo-ab-shape-2">
                  <img src={spimg2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="wpo-about-text">
              <div className="wpo-about-icon">
                <div className="icon">
                  <img src={spicon} alt="" />
                </div>
              </div>
              <div className="wpo-about-icon-content">
                <h2>
                  Reliable and Efficient <span>Payroll</span> Solutions
                </h2>
                <p>
                  Our payroll services ensure accurate and timely processing,
                  tax compliance, and seamless employee management. Whether
                  you're a small business or a large enterprise, we simplify
                  payroll complexities, helping you focus on what matters
                  most—growing your business.
                </p>
                {/* <div className="signeture">
                  <span>
                    <img src={sign} alt="" />
                  </span>
                  <p>Robert William, CEO</p>
                </div> */}
                <Link
                  onClick={ClickHandler}
                  to="/register"
                  className="btn theme-btn"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
