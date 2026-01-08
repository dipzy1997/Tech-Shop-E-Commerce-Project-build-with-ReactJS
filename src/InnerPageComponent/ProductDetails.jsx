import React from 'react'
import "../BodyComponent/Advantage"

export default function ProductDetails() {
  return (
    <div>
        {/* <!-- product details start --> */}

<section class="product-details-sec">
    <div class="container">
         <div class="row" id="product-details-row">
                {/* <!-- product render here dynamically --> */}
        </div>
    </div>
</section>


{/* <!-- product details end -->

<!-- product details tab section start --> */}
 <section class="product-tab-sec">
    <div class="container">
        <ul class="nav nav-tabs product-details-tab" id="myTab" role="tablist">

            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="specification-tab" data-bs-toggle="tab" data-bs-target="#specification" type="button" role="tab" aria-controls="home" aria-selected="true">specification</button>
            </li>

            <li class="nav-item" role="presentation">
                <button class="nav-link" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="profile" aria-selected="false">overview</button>
            </li>

            <li class="nav-item" role="presentation">
                <button class="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="contact" aria-selected="false">review</button>
            </li>

        </ul>


    <div class="tab-content product-details-tabcontent" id="myTabContent">
        
        <div class="tab-pane fade show active" id="specification" role="tabpanel" aria-labelledby="specification-tab">
            <div class="specification-container">
                {/* <!-- dynamically rendering specs --> */}
            </div>
        </div>

        <div class="tab-pane fade" id="overview" role="tabpanel" aria-labelledby="overview-tab">
            <h5>the <span class="overview-title"></span><span class="overview-para"></span>provides with fabulous sound quality</h5>
            <ul class="overview-list">
                <li>sound tuned to perfection</li>
                <li>comfortable to wear</li>
                <li>long hours playback time</li>
            </ul>
            <p>Buy the <span class="overview-title"></span>which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these Headphones giving you a truly awesome audio experience. It blends with exceptional sound quality and a range of smart features for an unrivalled listening experience.</p>
        </div>

        <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
            <div id="review-tab-container"></div>
            {/* <!-- review render here dynamically -->         */}
        </div>
        
    </div>

    </div>
 </section>
 

 
{/* <!-- product details tab section end --> */}


{/* <!-- related product start --> */}

<section class="related-product-sec">
    <div class="container">
        <div class="top-sec-heading related-prod-heading">
            <h3>related products</h3>
        </div>

        <div class="row related-prod-row">
            {/* <!-- related product dynamically rendering here --> */}
        </div>


    </div>
</section>

{/* <!-- related product end --> */}

<Advantage/>

    </div>

    
  )
}
