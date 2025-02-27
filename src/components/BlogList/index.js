import React from 'react';
import {Link} from 'react-router-dom'
import BlogSidebar from '../BlogSidebar'
import VideoModal from '../../components/ModalVideo'

import blog1 from '../../images/blog/img-4.jpg'
import blog2 from '../../images/blog/img-5.jpg'
import blog3 from '../../images/blog/img-6.jpg'


const BlogList = (props) => {

    return(

        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="wpo-blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src={blog1} alt=""/>
                                </div>
                                <div className="entry-meta">
                                    <ul>
                                        <li><i className="fi flaticon-user"></i> By <Link to="/blog-single">Jenny Watson</Link> </li>
                                        <li><i className="fi flaticon-comment-white-oval-bubble"></i> Comments 35 </li>
                                        <li><i className="fi flaticon-calendar"></i> 24 Jun 2021</li>
                                    </ul>
                                </div>
                                <div className="entry-details">
                                    <h3><Link to="/blog-single">8 Mistakes Founders Make When Starting a Business.</Link></h3>
                                    <p>Consulting is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.</p>
                                    <Link to="/blog-single" className="read-more">READ MORE...</Link>
                                </div>
                            </div>
                            <div className="post format-standard">
                                <div className="entry-meta">
                                    <ul>
                                        <li><i className="fi flaticon-user"></i> By <Link to="/blog-single">Jenny Watson</Link> </li>
                                        <li><i className="fi flaticon-comment-white-oval-bubble"></i> Comments 35 </li>
                                        <li><i className="fi flaticon-calendar"></i> 24 Jun 2021</li>
                                    </ul>
                                </div>
                                <div className="entry-details">
                                    <h3><Link to="/blog-single">Tips From Successful Small Business Owners</Link></h3>
                                    <p>Consulting is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.</p>
                                    <Link to="/blog-single" className="read-more">READ MORE...</Link>
                                </div>
                            </div>
                            
                            <div className="post format-gallery">
                                <div className="entry-media">
                                    <div className="post-slider">
                                        <img src={blog2} alt=""/>
                                    </div>
                                </div>
                                <div className="entry-meta">
                                    <ul>
                                        <li><i className="fi flaticon-user"></i> By <Link to="/blog-single">Jenny Watson</Link> </li>
                                        <li><i className="fi flaticon-comment-white-oval-bubble"></i> Comments 35 </li>
                                        <li><i className="fi flaticon-calendar"></i> 24 Jun 2021</li>
                                    </ul>
                                </div>
                                <div className="entry-details">
                                    <h3><Link to="/blog-single">Worst Ways Small Businesses Waste Money on Marketing</Link></h3>
                                    <p>Consulting is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.</p>
                                    <Link to="/blog-single" className="read-more">READ MORE...</Link>
                                </div>
                            </div>
                            <div className="post format-video">
                                <div className="entry-media video-holder">
                                    <img src={blog3} alt=""/>
                                    <VideoModal/>
                                </div>
                                <div className="entry-meta">
                                    <ul>
                                        <li><i className="fi flaticon-user"></i> By <Link to="/blog-single">Jenny Watson</Link> </li>
                                        <li><i className="fi flaticon-comment-white-oval-bubble"></i> Comments 35 </li>
                                        <li><i className="fi flaticon-calendar"></i> 24 Jun 2021</li>
                                    </ul>
                                </div>
                                <div className="entry-details">
                                    <h3><Link to="/blog-single">Why Choose Management Consulting?</Link></h3>
                                    <p>Consulting is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.</p>
                                    <Link to="/blog-single" className="read-more">READ MORE...</Link>
                                </div>
                            </div>
                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link to="/blog-left-sidebar" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link to="/blog-left-sidebar">1</Link></li>
                                    <li><Link to="/blog-left-sidebar">2</Link></li>
                                    <li><Link to="/blog-left-sidebar">3</Link></li>
                                    <li>
                                        <Link to="/blog-left-sidebar" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft}/>
                </div>
            </div>
        </section>

     )
        
}

export default BlogList;
