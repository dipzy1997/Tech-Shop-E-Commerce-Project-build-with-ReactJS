import React from 'react'
import Slider from "react-slick";
import "../Style.css"
import "../Responsive.css"
import { featureContent } from '../data/featureCarouselData'
import { FaIndianRupeeSign } from "react-icons/fa6";




export default function FeatureCarousel() {
    const featureSlider = {
        centerMode: true,
        centerPadding: '0px',
        variableWidth: true,
        // slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
    }
  return (
    <div>
        {/* <!-- featured product carousel start --> */}

<section class="featured-product-sec">
    <div class="container">
        <div class="feature-heading">
            <h3>featured products</h3>
        </div>


        <Slider className="pcarousel" {...featureSlider}>
            {featureContent.map((f)=>(
                <div key={f.id}>
                    <div class="product-card">
                        <h6>{f.title}</h6>
                        <div class="product-card-img">
                            <img src={f.image} alt={f.title}/>
                        </div>
                        <p><FaIndianRupeeSign/>{f.discountPrice}<span><FaIndianRupeeSign/>{f.actualPrice}</span></p>
                    </div>
                </div>
            ))}

        </Slider>



        {/* <!-- carousel --> */}
    

    </div>
</section>


{/* <!-- featured product carousel end --> */}
    </div>
  )
}
