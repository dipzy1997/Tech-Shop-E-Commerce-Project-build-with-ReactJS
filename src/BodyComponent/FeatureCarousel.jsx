import React from 'react'
import "../Style.css"

export default function FeatureCarousel() {
  return (
    <div>
        {/* <!-- featured product carousel start --> */}

<section class="featured-product-sec">
    <div class="container">
        <div class="feature-heading">
            <h3>featured products</h3>
        </div>

        {/* <!-- carousel --> */}
    <div class="pcarousel">
      
        {/* <!-- 1st item --> */}
        <div>
            <div class="product-card">
                <h6>boAt Airdopes 203</h6>
                <div class="product-card-img">
                    <img src="./images/products/boat203-1.png" alt=""/>
                </div>
                <p><i class="fa-solid fa-indian-rupee-sign"></i>1074<span><i class="fa-solid fa-indian-rupee-sign"></i>3999</span></p>
            </div>
        </div>

        {/* <!-- 2nd item --> */}
         <div>
            <div class="product-card">
                <h6>boAt Rockerz 518</h6>
                <div class="product-card-img">
                    <img src="./images/products/boat518-1.png" alt=""/>
                </div>
                <p><i class="fa-solid fa-indian-rupee-sign"></i>1,299<span><i class="fa-solid fa-indian-rupee-sign"></i>3,990</span></p>
            </div>
        </div>

        {/* <!-- 3rd item --> */}
         <div>
            <div class="product-card">
                <h6>JBL Tune 760NC</h6>
                <div class="product-card-img">
                    <img src="./images/products/jbl760nc-1.png" alt=""/>
                </div>
                <p><i class="fa-solid fa-indian-rupee-sign"></i>5,999<span><i class="fa-solid fa-indian-rupee-sign"></i>7,999</span></p>
            </div>
        </div>

        {/* <!-- 4th item --> */}
         <div>
            <div class="product-card">
                <h6>JBL Endurance Run Sports</h6>
                <div class="product-card-img">
                    <img src="./images/products/jbl-endu-1.png" alt=""/>
                </div>
                <p><i class="fa-solid fa-indian-rupee-sign"></i>999<span><i class="fa-solid fa-indian-rupee-sign"></i>1,599</span></p>
            </div>
        </div>

        {/* <!-- 5th item --> */}
         <div>
            <div class="product-card">
                <h6>boAt Rockerz 255</h6>
                <div class="product-card-img">
                    <img src="./images/products/boat255r-1.png" alt=""/>
                </div>
                <p><i class="fa-solid fa-indian-rupee-sign"></i>899<span><i class="fa-solid fa-indian-rupee-sign"></i>2,990</span></p>
            </div>
        </div>
    
    </div>

    </div>
</section>


{/* <!-- featured product carousel end --> */}
    </div>
  )
}
