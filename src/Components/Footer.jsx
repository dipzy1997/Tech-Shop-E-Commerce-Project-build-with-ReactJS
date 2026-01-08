import React from 'react'
import "../Style.css"
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter, FaInstagram,  FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { footMenu, footSocial } from '../data/footerData';

export default function Footer() {
  return (
    <div>
        {/* <!-- footer start --> */}

<footer>
    <div class="container">
        <div class="row">
            {/* <!-- 1st column --> */}
            <div class="col-md-3">
                <div class="f-col1">
                    <div class="footer-logo">
                    <Link to="/">Tech-Shop</Link>
                    </div>
                    <p class="f-para">subscribe to our email alerts to receive early discount offers, and new product info.</p>
                    <div class="subscribe">
                        <input type="text" name="" id="" placeholder="Email Address*" required/>
                        <button type="submit" class="red-btn">Subscribe</button>
                    </div>
                </div>  
            </div>


            {footMenu.map((section)=>(
                <div className="col-md-3" key={section.id}>
                    <div className={section.className}>
                         <h5 className="f-list-head">{section.title}</h5>
                         <ul>
                            {section.menu.map((item)=>(
                                <li key={item.id}>
                                    <Link to={item.path}>{item.link}</Link>
                                </li>
                            ))}
                         </ul>
                    </div>

                </div>
            ))}

        </div>
    </div>
</footer>

{/* <!-- footer end -->

<!-- copyright section start --> */}

<section className="copyright">
    <div className="container">
        <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
                <div className="copyright-text">
                    <p>2025 | all right reserved &copy;.</p>
                </div>
            </div>
            <div className="col-md-6">
                <ul className="social-icon d-flex align-items-center justify-content-end">
                    {footSocial.map((item=>(
                        <li key={item.id}>
                            <Link to={item.path}><item.icon/></Link>
                        </li>
                    )))}
                </ul>
            </div>
        </div>
    </div>
</section>




{/* <!-- copyright section end --> */}
    </div>
  )
}
