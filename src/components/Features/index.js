import React from "react";
import { Link } from "react-router-dom";

import prdimg1 from "../../images/icon/document.svg";
import prdimg2 from "../../images/icon/bar-graph.svg";
import prdimg3 from "../../images/icon/clipboard.svg";

const Features = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const featres = [
    {
      fIcon: prdimg1,
      title: "Payroll Processing",
      des: "Ensure timely and accurate payroll processing with automated calculations and compliance checks.",
      link: "/service-single",
    },
    {
      fIcon: prdimg2,
      title: "Tax Compliance",
      des: "Stay compliant with tax regulations by automating payroll tax calculations and filings.",
      link: "/service-single",
    },
    {
      fIcon: prdimg3,
      title: "Employee Benefits Management",
      des: "Manage employee benefits, deductions, and direct deposits effortlessly in one place.",
      link: "/service-single",
    },
  ];

  return (
    <section
      className={`wpo-features-section section-padding  ${props.featuresClass}`}
    >
      <div className="container">
        <div className="row">
          {featres.map((featres, fitem) => (
            <div className="col-lg-4 col-md-6 col-12" key={fitem}>
              <div className="wpo-features-item">
                <div className="wpo-features-icon">
                  <div className="icon">
                    <img src={featres.fIcon} alt="" />
                  </div>
                </div>
                <div className="wpo-features-text">
                  <h2>
                    <Link onClick={ClickHandler} to={featres.link}>
                      {featres.title}
                    </Link>
                  </h2>
                  <p>{featres.des}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
