import React from 'react'
import "../Style.css"

export default function BannerCarousel() {
  return (
    <div>
        {/* <!-- Banner carousel start --> */}

<section class="banner">
    <div class="container">
        <div class="owl-carousel owl-theme banner-carousel">

            {/* <!-- 1st item --> */}
            <div class="item">
                <div class=" row banner-slide bslide1 justify content-center align-items-center">
                    <h1>over ear</h1>
                    <div class="col-md-6 banner-con-col">
                        <div class="banner-content">
                            <h6>JBL Live 660NC</h6>
                            <h4>keep the noise out, or in. you choose.</h4>
                            <p><i class="fa-solid fa-indian-rupee-sign"></i>9,999 <span><i class="fa-solid fa-indian-rupee-sign"></i>14,999</span></p>
                            <button class="red-btn banner-shop-btn" data-id="1">shop now</button>
                        </div>
                    </div>
                    <div class="col-md-6 banner-img-col">
                        <div class="banner-img">
                            <img src="./images/products/jbl660nc-1.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- 2nd Item --> */}
              <div class="item">
                <div class=" row banner-slide bslide1 justify content-center align-items-center">
                    <h1>in ear</h1>
                    <div class="col-md-6 banner-con-col">
                        <div class="banner-content">
                            <h6>boAt Airdopes 131</h6>
                            <h4>featherweight for comfort all-day.</h4>
                            <p><i class="fa-solid fa-indian-rupee-sign"></i>1,099 <span><i class="fa-solid fa-indian-rupee-sign"></i>2,990</span></p>
                            <button class="red-btn banner-shop-btn" data-id="3">shop now</button>
                        </div>
                    </div>
                    <div class="col-md-6 banner-img-col">
                        <div class="banner-img">
                            <img src="./images/products/boat131-3.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- 3rd item --> */}
              <div class="item">
                <div class=" row banner-slide bslide1 justify content-center align-items-center">
                    <h1>over ear</h1>
                    <div class="col-md-6 banner-con-col">
                        <div class="banner-content">
                            <h6>Sony WH-XB910N</h6>
                            <h4>give your favourite music a boost.</h4>
                            <p><i class="fa-solid fa-indian-rupee-sign"></i>13,489 <span><i class="fa-solid fa-indian-rupee-sign"></i>19,990</span></p>
                            <button class="red-btn banner-shop-btn" data-id="7">shop now</button>
                        </div>
                    </div>
                    <div class="col-md-6 banner-img-col">
                        <div class="banner-img">
                            <img src="./images/products/sonyXb910n-1.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!-- Banner carousel end --> */}
    </div>
  )
}
