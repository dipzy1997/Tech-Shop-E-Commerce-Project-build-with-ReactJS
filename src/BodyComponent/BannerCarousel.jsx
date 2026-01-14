import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "../Style.css";
import "../Responsive.css";

import { bannerMenu } from "../data/bannerCarouselData";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function BannerCarousel() {

  const makeSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      {/* <!-- Banner carousel start --> */}

      <section className="banner">
        <div className="container">

          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="owl-theme"   
          >

            {bannerMenu.map((b) => (
              <SwiperSlide key={b.id}>
                <div className="item">
                  <div className="row banner-slide bslide1 justify-content-center align-items-center">

                    <h1>{b.bgText}</h1>

                    <div className="col-md-6 banner-con-col">
                      <div className="banner-content">
                        <h6>{b.title}</h6>
                        <h4>{b.desc}</h4>

                        <p>
                          <FaIndianRupeeSign />
                          {b.discountPrice}
                          <span>
                            <FaIndianRupeeSign />
                            {b.actualPrice}
                          </span>
                        </p>

                        <Link to={`/products/${makeSlug(b.title)}`}>
                            <button className="red-btn banner-shop-btn">
                              shop now
                           </button>
                        </Link>
                        
                      </div>
                    </div>

                    <div className="col-md-6 banner-img-col">
                      <div className="banner-img">
                        <img src={b.images[0]} alt={b.title} />
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </section>

     
    </div>
  );
}
