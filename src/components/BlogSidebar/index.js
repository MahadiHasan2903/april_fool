import React from 'react';
import {Link} from 'react-router-dom'
import about from '../../images/blog/about-widget.jpg'
import about2 from '../../images/blog/ab.png'
import rp1 from '../../images/recent-posts/img-1.jpg'
import rp2 from '../../images/recent-posts/img-2.jpg'
import rp3 from '../../images/recent-posts/img-3.jpg'

import ins1 from '../../images/instragram/13.jpg'
import ins2 from '../../images/instragram/14.jpg'
import ins3 from '../../images/instragram/15.jpg'
import ins4 from '../../images/instragram/16.jpg'
import ins5 from '../../images/instragram/17.jpg'
import ins6 from '../../images/instragram/18.jpg'


const BlogSidebar = (props) => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <img src={about} alt=""/>
                    </div>
                    <h4>Jenny Watson</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} to="/blog-single"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                        <img src={about2} alt=""/>
                    </div>
                </div>
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-single">Blockchain Consulting <span>5</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Commodity Traders <span>7</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Financial Planning <span>3</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Investment Consulting <span>6</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Online Banking Consulting <span>2</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Personal Consulting Advice <span>8</span></Link></li>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                                <img src={rp1} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-single">Why Choose Management Consulting?</Link></h4>
                                <span className="date">19 Jun 2021 </span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={rp2} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-single">Researching the Consulting Career Path</Link></h4>
                                <span className="date">22 May 2021 </span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={rp3} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-single">Joining the Consulting Club During Your MBA</Link></h4>
                                <span className="date">12 Apr 2021 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Projects</h3>
                    </div>
                    <ul className="d-flex">
                        <li><Link onClick={ClickHandler} to="/project-single"><img src={ins1} alt=""/></Link></li>
                        <li><Link onClick={ClickHandler} to="/project-single"><img src={ins2} alt=""/></Link></li>
                        <li><Link onClick={ClickHandler} to="/project-single"><img src={ins3} alt=""/></Link></li>
                        <li><Link onClick={ClickHandler} to="/project-single"><img src={ins4} alt=""/></Link></li>
                        <li><Link onClick={ClickHandler} to="/project-single"><img src={ins5} alt=""/></Link></li>
                        <li><Link onClick={ClickHandler} to="/project-single"><img src={ins6} alt=""/></Link></li>
                    </ul>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-single">Consulting</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Planning</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Marketing</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Strategy</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Finance</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Solution</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Corporate</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Idea</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Market Reserch</Link></li>
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                        <h2>How We Can <br/> Help You!</h2>
                        <p>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <Link onClick={ClickHandler} to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar;
