import React from "react";
import { Link } from "react-router-dom";

const Pricing = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const pricing = [
    {
      fIcon: "fi flaticon-medal",
      li1: "Payroll for up to 10 employees",
      li2: "Tax filing & compliance",
      li3: "Employee pay slips",
      li4: "Dedicated support",
      li5: "Monthly payroll reports",
      title: "Basic Pack",
      link: "/login",
    },
    {
      fIcon: "fi flaticon-stats",
      li1: "Payroll for up to 50 employees",
      li2: "Tax filing & reporting",
      li3: "Employee benefits management",
      li4: "Advanced analytics",
      li5: "Quarterly reports",
      title: "Standard Pack",
      link: "/login",
    },
    {
      fIcon: "fi flaticon-trophy",
      li1: "Payroll for up to 200 employees",
      li2: "Comprehensive tax & compliance",
      li3: "Employee benefits & wellness",
      li4: "Custom payroll reports",
      li5: "Dedicated account manager",
      title: "Enterprise Pack",
      link: "/login",
    },
  ];

  return (
    <section className="wpo-pricing-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wpo-section-title">
              <span>Pricing</span>
              <h2>Our Payroll Packages</h2>
            </div>
          </div>
        </div>
        <div className="wpo-pricing-items">
          <div className="row">
            {pricing.map((pricing, ptem) => (
              <div className="col col-lg-4 col-md-6 col-12" key={ptem}>
                <div className="wpo-pricing-item">
                  <h2>{pricing.title}</h2>
                  <div className="price-icon">
                    <i className={pricing.fIcon}></i>
                  </div>
                  <ul>
                    <li>{pricing.li1}</li>
                    <li>{pricing.li2}</li>
                    <li>{pricing.li3}</li>
                    <li>{pricing.li4}</li>
                  </ul>
                  <Link
                    className="theme-btn"
                    onClick={ClickHandler}
                    to={pricing.link}
                  >
                    Choose Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
