import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo2.png";

import ins1 from "../../images/instragram/1.jpg";
import ins2 from "../../images/instragram/2.jpg";
import ins3 from "../../images/instragram/3.jpg";
import ins4 from "../../images/instragram/4.jpg";
import ins5 from "../../images/instragram/5.jpg";
import ins6 from "../../images/instragram/6.jpg";

const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Link onClick={ClickHandler} to="/">
                    <img src={Logo} alt="Payroll Service" />
                  </Link>
                </div>
                <p>
                  We provide reliable payroll solutions tailored to meet your
                  company's needs. From tax filing to employee benefits
                  management, we handle it all.
                </p>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-google"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi flaticon-location"></i>7 Green Lake
                      Street Crawfordsville, IN 47933
                    </li>
                    <li>
                      <i className="fi flaticon-phone-call"></i>+1 800 234 567
                      890
                    </li>
                    <li>
                      <i className="fi flaticon-send"></i>
                      support@payrollservice.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Services </h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/service">
                      Payroll Processing
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/service">
                      Tax Filing & Compliance
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/service">
                      Employee Benefits Management
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/service">
                      Payroll Reports & Analytics
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/service">
                      Employee Self-Service Portal
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Help </h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="#">
                      Payroll Compliance Guidelines
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                {" "}
                Copyright &copy; 2021 Payroll Solutions by{" "}
                <Link onClick={ClickHandler} to="/home">
                  Consultar
                </Link>
                . All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
