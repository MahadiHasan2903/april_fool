import React from 'react'
import blog1 from '../../images/blog/img-1.jpg'
import blog2 from '../../images/blog/img-2.jpg'
import blog3 from '../../images/blog/img-3.jpg'
import author1 from '../../images/blog/blog-avater/img-1.jpg'
import author2 from '../../images/blog/blog-avater/img-2.jpg'
import author3 from '../../images/blog/blog-avater/img-3.jpg'
import {Link} from 'react-router-dom'

const BlogSection = (props) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

     const Blog = [
        {
            blogImg:blog1,
            title:'8 Mistakes First-Time Founders Make When Starting a Business.',
            tag:'Business',
            authorImg:author1,
            authorName:'Konal Biry',
            authorTitle:'Marketing Manager',
            time:'13 AUG,21',
            link:'/blog-single',

        },
        {
            blogImg:blog2,
            title:'3 of the Worst Ways Small Businesses Waste Money on Marketing',
            tag:'Consulitng',
            authorImg:author2,
            authorName:'Robert Johnson',
            authorTitle:'Marketing Manager',
            time:'14 AUG,21',
            link:'/blog-single',

        },
        {
            blogImg:blog3,
            tag:'Business',
            title:'Good Advice: Tips From Successful Small Business Owners',
            authorImg:author3,
            authorName:'Josna Bothy',
            authorTitle:'Marketing Manager',
            time:'15 AUG,21',
            link:'/blog-single',

        },
     ]
    return(
        <section className="wpo-blog-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>blog</span>
                            <h2>Our blog Packages</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-blog-items">
                    <div className="row">
                         {Blog.map((blog, Bitem) => (
                            <div className="col col-lg-4 col-md-6 col-12"  key={Bitem}>
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <img src={blog.blogImg} alt=""/>
                                    </div>
                                    <div className="wpo-blog-content">
                                        <div className="wpo-blog-content-top">
                                            <div className="wpo-blog-thumb">
                                                <span>{blog.tag}</span>
                                            </div>
                                            <h2><Link onClick={ClickHandler} to={blog.link}>{blog.title}</Link></h2>
                                        </div>
                                        <div className="wpo-blog-content-btm">
                                            <div className="wpo-blog-content-btm-left">
                                                <div className="wpo-blog-content-btm-left-img">
                                                    <img src={blog.authorImg} alt=""/>
                                                </div>
                                                <div className="wpo-blog-content-btm-left-text">
                                                    <h4><Link onClick={ClickHandler} to={blog.link}>{blog.authorName}</Link></h4>
                                                    <span>{blog.authorTitle}</span>
                                                </div>
                                            </div>
                                            <div className="wpo-blog-content-btm-right">
                                                <span>{blog.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection;