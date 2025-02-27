import React from "react";
import { Link } from "react-router-dom";

import prjImg1 from "../../images/gallery/img-6.jpg";
import prjImg2 from "../../images/gallery/img-7.jpg";
import prjImg3 from "../../images/gallery/img-8.jpg";
import prjImg4 from "../../images/gallery/img-9.jpg";
import prjImg5 from "../../images/gallery/img-10.jpg";
import prjImg6 from "../../images/gallery/img-11.jpg";

const ProjectsS2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const projects = [
    {
      pImg: prjImg1,
      title: "Payroll Solutions Implementation",
      link: "/project-single",
    },
    {
      pImg: prjImg2,
      title: "Tax Compliance Management",
      link: "/project-single",
    },
    {
      pImg: prjImg3,
      title: "Employee Benefits Administration",
      link: "/project-single",
    },
    {
      pImg: prjImg4,
      title: "HR Support and Consulting",
      link: "/project-single",
    },
    {
      pImg: prjImg5,
      title: "Automated Payroll Systems",
      link: "/project-single",
    },
    {
      pImg: prjImg6,
      title: "Payroll Software Development",
      link: "/project-single",
    },
  ];

  return (
    <section className="wpo-gallery-section wpo-gallery-section-s2 section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12 sortable-gallery">
            <div className="wpo-gallery-container">
              {projects.map((projects, pritem) => (
                <div className="grid" key={pritem}>
                  <div className="wpo-gallery-item">
                    <Link onClick={ClickHandler} to="/project-single">
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

export default ProjectsS2;
