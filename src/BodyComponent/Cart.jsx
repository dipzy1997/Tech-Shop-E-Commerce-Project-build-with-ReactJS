import React from 'react'

export default function Cart() {
  return (
    <div>
        {/* <!-- product added to cart section start --> */}

<section class="prod-added-to-cart">
    <div class="container">
        <div class="row">

            <div class="col-md-8">
                <div class="added-prod-box">

                    {/* <!-- product 1 -->
                    <!-- dynamically product render here --> */}

                </div>
            </div>

            <div class="col-md-4">
                <div class="order-summary-sec">
                    <h6>order summary (0 items)</h6>
                    <div class="price-summary-sec">
                        <div class="original-price d-flex justify-content-between">
                            <p>original price</p>
                            <span><i class="fa-solid fa-indian-rupee-sign"></i>0</span>
                        </div>
                        
                        <div class="discount d-flex justify-content-between">
                            <p>discount </p>
                            <span>-<i class="fa-solid fa-indian-rupee-sign"></i>0</span>
                        </div>
                        <div class="delivery d-flex justify-content-between">
                            <p>delivery</p>
                            <span>free</span>
                        </div>
                        <div class="total-price d-flex justify-content-between">
                            <p>total price</p>
                            <span><i class="fa-solid fa-indian-rupee-sign"></i>0</span>
                        </div>
                        <button class="red-btn w-100">checkout</button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</section>


{/* <!-- product added to cart section end -->



<!-- empty cart view section start--> */}

<section class="empty-cart-sec">
   
        <div class="empty-cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
  <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
            <p>your cart is empty</p>
            <a href="./all-product.html" class="red-btn">start shopping</a>
        </div>
  
</section>


{/* <!-- empty cart view section end--> */}

    </div>
  )
}
