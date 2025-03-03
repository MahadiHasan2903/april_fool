import React from "react";
import { Link } from "react-router-dom";

import prjImg1 from "../../images/gallery/img-6.jpg";
import prjImg2 from "../../images/gallery/img-7.jpg";
import prjImg3 from "../../images/gallery/img-8.jpg";
import prjImg4 from "../../images/gallery/img-9.jpg";

const Projects = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const projects = [
    {
      pImg: prjImg1,
      title: "Payroll Software Integration",
      link: "/project-single",
    },
    {
      pImg: prjImg2,
      title: "Automated Payroll Solutions",
      link: "/project-single",
    },
    {
      pImg: prjImg3,
      title: "Tax Filing and Compliance",
      link: "/project-single",
    },
    {
      pImg: prjImg4,
      title: "Employee Benefits Management",
      link: "/project-single",
    },
  ];

  return (
    <section className="wpo-gallery-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-8">
            <div className="wpo-section-title">
              <span>Projects</span>
              <h2>Our Payroll Solutions</h2>
            </div>
          </div>
          <div className="col-lg-6 col-sm-4">
            <div className="wpo-section-title-button">
              {/* <Link onClick={ClickHandler} to="/project">
                More Solutions
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-xs-12 sortable-gallery">
            <div className="wpo-gallery-container">
              {projects.map((projects, pritem) => (
                <div className="grid" key={pritem}>
                  <div className="wpo-gallery-item">
                    <Link onClick={ClickHandler} to={projects.link}>
                      <img
                        src={projects.pImg}
                        alt=""
                        className="img img-responsive"
                      />
                      <div className="wpo-gallery-text">
                        <h3>{projects.title}</h3>
                        <i className="ti-plus"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
