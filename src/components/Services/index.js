import React from "react";
import { Link } from "react-router-dom";

import srvimg1 from "../../images/icon/clipboard.svg";
import srvimg2 from "../../images/icon/briefcase.svg";
import srvimg3 from "../../images/icon/chart.svg";
import srvimg4 from "../../images/icon/badge.svg";
import srvimg5 from "../../images/icon/goal.svg";
import srvimg6 from "../../images/icon/handshake.svg";

const Services = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const service = [
    {
      sIcon: srvimg1,
      title: "Payroll Management",
      des: "Accurate payroll processing that minimizes errors while ensuring tax compliance and timely salary disbursement.",
      link: "/service-single",
    },
    {
      sIcon: srvimg2,
      title: "Employee Benefits Admin",
      des: "Efficient management of employee benefits, including health plans, insurance, and retirement options.",
      link: "/service-single",
    },
    {
      sIcon: srvimg3,
      title: "Tax Filing & Compliance",
      des: "Ensure seamless payroll tax compliance with up-to-date reporting, tax filing, and regulatory adherence.",
      link: "/service-single",
    },
    {
      sIcon: srvimg4,
      title: "Attendance Tracking",
      des: "Automated tracking of employee hours, overtime, and leaves, fully integrated with payroll processing.",
      link: "/service-single",
    },
    {
      sIcon: srvimg5,
      title: "Direct Deposit Services",
      des: "Fast, secure, and error-free payroll payments with direct deposit and automated salary disbursement.",
      link: "/service-single",
    },
    {
      sIcon: srvimg6,
      title: "HR & Payroll Integration",
      des: "Seamless integration of HR and payroll systems to streamline workforce management and record-keeping.",
      link: "/service-single",
    },
  ];

  return (
    <section className="wpo-service-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wpo-section-title">
              <span>Our Services</span>
              <h2>Explore Our Payroll Solutions</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {service.map((service, sitem) => (
            <div className="col-lg-4 col-md-6 col-12" key={sitem}>
              <div className="wpo-service-item">
                <div className="wpo-service-icon">
                  <div className="icon">
                    <img src={service.sIcon} alt="" />
                  </div>
                </div>
                <div className="wpo-service-text">
                  <h2>
                    <Link onClick={ClickHandler} to={service.link}>
                      {service.title}
                    </Link>
                  </h2>
                  <p>{service.des}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
