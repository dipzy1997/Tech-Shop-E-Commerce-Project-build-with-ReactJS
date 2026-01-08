import React from 'react'
import Advantage from '../BodyComponent/Advantage'

export default function AllProduct() {
  return (
    <div>
        {/* <!-- all product section start --> */}

    <section class="all-product-sec">
        <div class="container">
            <div class="row" id="all-prod-row">
                <div class="col-md-2">
                    <div class="product-filter-sec">
                        <button class="red-btn filter-clear-btn">clear filter</button>
                        <div class="all-sort-sec">
                            <h5>sort by</h5>
                            <ul>
                                {/* <!-- <li>latest</li>
                                <li>featured</li>
                                <li>top rated</li>
                                <li>price (lowest first)</li>
                                <li>price (highest first)</li> -->
                                <!-- create dynamically from filterBarData.js --> */}
                            </ul>
                        </div>

                        <div class="all-filter-sec">
                            <h5>filter by</h5>
                            <h6>brands</h6>
                            <ul>
                                {/* <!-- <li><label><input type="checkbox" value="JBL"> JBL</label></li>
                                <li><label><input type="checkbox" value="boAt"> boAt</label></li>
                                <li><label><input type="checkbox" value="Sony"> Sony</label></li> -->
                                 <!-- create dynamically from filterBarData.js --> */}
                            </ul>

                            <h6>category</h6>
                            <ul>
                                {/* <!-- <li><label><input type="checkbox" value="Headphones"> Headphones</label></li>
                                <li><label><input type="checkbox" value="Earphones"> Earphones</label></li>
                                <li><label><input type="checkbox" value="Earbuds"> Earbuds</label></li>
                                <li><label><input type="checkbox" value="Neckbands"> Neckbands</label></li> -->
                                 <!-- create dynamically from filterBarData.js --> */}

                            </ul>
                        </div>

                        <div class="all-price-range">
                            <h6>price</h6>
                            <label for="price-range" id="price-value"><i class="fa-solid fa-indian-rupee-sign"></i> 0</label>
                            <input type="range" name="" id="price-range" min="100" max="15000"/>
                        </div>

                    </div>
                </div>
                <div class="col-md-10">
                    <div class="row" id="all-products-container">
                      {/* <!-- rendering all product dynamically --> */}

                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- all product section end --> */}

<Advantage/>

    </div>
  )
}
