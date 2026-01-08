import React from 'react'
import "../Style.css"

export default function TopProduct() {
  return (
    <div>
        {/* <!-- top product start --> */}

<section class="top-product-sec">
    <div class="container">
        <div class="top-sec-heading">
            <h3>top products</h3>
        </div>

        <div class="category-btns d-flex justify-content-between align-items-center">
            <button class="redbtn-active">all</button>
            <button>headphones</button>
            <button>earbuds</button>
            <button>earphones</button>
            <button>neckbands</button>
        </div>

        {/* <!-- top product list start --> */}
            <div class="top-product-container">
                <div class="row" id="topProductsRow">
                    {/* <!-- render product dynamically here --> */}
                </div>
            </div>

    </div>
</section>

{/* <!-- top product end --> */}
    </div>
  )
}
