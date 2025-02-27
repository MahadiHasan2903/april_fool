import React, { Component } from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import MobileMenu from "../../components/MobileMenu";
import HeaderTopbar from "../../components/HeaderTopbar";

export default class Header2 extends Component {
  state = {
    isSearchShow: false,
  };

  searchHandler = () => {
    this.setState({
      isSearchShow: !this.state.isSearchShow,
    });
  };

  render() {
    const { isSearchShow } = this.state;

    const SubmitHandler = (e) => {
      e.preventDefault();
    };
    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };
    return (
      <header id="header">
        <HeaderTopbar />
        <div className="wpo-site-header">
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <MobileMenu />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="navbar-header">
                    <Link
                      onClick={ClickHandler}
                      className="navbar-brand"
                      to="/home"
                    >
                      <img src={Logo} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-1 col-1">
                  <div
                    id="navbar"
                    className="collapse navbar-collapse navigation-holder"
                  >
                    <button className="menu-close">
                      <i className="ti-close"></i>
                    </button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/">
                          Home
                        </Link>
                        {/* <ul className="sub-menu">
                          <li>
                            <Link onClick={ClickHandler} to="/home">
                              Home style 1
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/home2">
                              Home style 2
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/home3">
                              Home style 3
                            </Link>
                          </li>
                        </ul> */}
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/about">
                          About
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/service">
                          Services
                        </Link>
                        {/* <ul className="sub-menu">
                          <li>
                            <Link onClick={ClickHandler} to="/service">
                              Service
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/service-s2">
                              Service style 2
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/service-single">
                              Service Single
                            </Link>
                          </li>
                        </ul> */}
                      </li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/project">
                          Projects
                        </Link>
                        {/* <ul className="sub-menu">
                          <li>
                            <Link onClick={ClickHandler} to="/project">
                              Project
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/project-s2">
                              Project Style 2
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/project-single">
                              Project Single
                            </Link>
                          </li>
                        </ul> */}
                      </li>
                      {/* <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/">
                          Pages
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link onClick={ClickHandler} to="/pricing">
                              Pricing
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/testimonial">
                              Testimonial
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/404">
                              Error 404
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/login">
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/register">
                              Register
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/blog">
                          Blog
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link onClick={ClickHandler} to="/blog">
                              Blog right sidebar
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={ClickHandler}
                              to="/blog-left-sidebar"
                            >
                              Blog left sidebar
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/blog-fullwidth">
                              Blog fullwidth
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link onClick={ClickHandler} to="/">
                              Blog details
                            </Link>
                            <ul className="sub-menu">
                              <li>
                                <Link onClick={ClickHandler} to="/blog-single">
                                  Blog details right sidebar
                                </Link>
                              </li>
                              <li>
                                <Link
                                  onClick={ClickHandler}
                                  to="/blog-single-left-sidebar"
                                >
                                  Blog details left sidebar
                                </Link>
                              </li>
                              <li>
                                <Link
                                  onClick={ClickHandler}
                                  to="/blog-single-fullwidth"
                                >
                                  Blog details fullwidth
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <Link onClick={ClickHandler} to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-2 col-2">
                  <div className="header-right">
                    <div className="close-form">
                      <Link
                        onClick={ClickHandler}
                        className="theme-btn"
                        to="/login"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
