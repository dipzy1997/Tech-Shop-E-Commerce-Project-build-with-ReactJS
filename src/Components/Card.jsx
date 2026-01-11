import React from 'react'
import "../Style.css"
import "../Responsive.css"
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


export default function Card({product}) {

  function getStarRating(count){
  let star = [];

  for(let i = 0; i < count; i++){
    star.push(
      <span key={i}>
         <FaStar/>
      </span>
    )
  }
  return star;
}


  return (
    
        
      <div className='col-lg-3 col-md-4' key={product.id}>

        <div class="top-product-content-box" >
            <div class="top-product-img">
                <img src={product.images[0]} alt={product.title} />
            </div>
            <div class="top-product-details">
                <div class="rating-star d-flex align-items-center">
                    {getStarRating(product.rateCount)}
                </div>
                <div class="top-product-heading">
                    <h5>{product.title}</h5>
                    <p>{product.info}</p>
                </div>
                <div class="top-product-price">
                    <p><FaIndianRupeeSign/>{product.finalPrice}<span>< FaIndianRupeeSign/>{product.originalPrice}</span></p>
                </div>
                <button class="addcartbtn red-btn">add to cart</button>
            </div>
        </div>

      </div>
     
    
  )
}
