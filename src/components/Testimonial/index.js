import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from "../../images/testimonial/img-1.jpg";
import ts2 from "../../images/testimonial/img-2.jpg";
import ts3 from "../../images/testimonial/img-3.jpg";

class Testimonial extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      speed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const testimonial = [
      {
        tsImg: ts1,
        Des: "Payroll services have been a game-changer for us. The team is professional, efficient, and always available when we need them. Our payroll is processed smoothly every time.",
        Title: "Jenny Watson",
        Sub: "HR Manager, ABC Corp",
      },
      {
        tsImg: ts2,
        Des: "We’ve been using this payroll solution for over a year now, and it’s been fantastic. They handle everything from tax filings to employee benefits with great precision.",
        Title: "Harry Abraham",
        Sub: "Finance Director, XYZ Ltd",
      },
      {
        tsImg: ts3,
        Des: "The team’s support and expertise have made our payroll management seamless. We no longer worry about compliance or deadlines, thanks to their timely services.",
        Title: "Ron Di-soza",
        Sub: "CEO, Tech Innovations",
      },
      {
        tsImg: ts1,
        Des: "Choosing this payroll provider was one of the best decisions we made. The level of accuracy and support they offer is unmatched, and our employees are happier than ever.",
        Title: "Benjir Walton",
        Sub: "COO, Bright Future Enterprises",
      },
    ];

    return (
      <section
        className={`wpo-testimonial-section section-padding ${this.props.tClass}`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="wpo-testimonial-title">
                <h2>
                  <i className="fi flaticon-left-quote"></i> What{" "}
                  <span>Our Clients</span> are Saying
                </h2>
              </div>
            </div>
          </div>
          <div className="wpo-testimonial-items wpo-testimonial-slider owl-carousel">
            <Slider {...settings}>
              {testimonial.map((tesmnl, tsm) => (
                <div className="wpo-testimonial-item" key={tsm}>
                  <div className="wpo-testimonial-avatar">
                    <img src={tesmnl.tsImg} alt="" />
                  </div>
                  <div className="wpo-testimonial-text">
                    <p>{tesmnl.Des}</p>
                    <div className="wpo-testimonial-text-btm">
                      <h3>{tesmnl.Title}</h3>
                      <span>{tesmnl.Sub}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
