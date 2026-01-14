import React from 'react'
import "../Style.css"
import "../Responsive.css"
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useCartContext } from '../contextApi/CartProvider';
import { Link } from 'react-router-dom';


export default function Card({product}) {

  const {state, dispatch} = useCartContext();
  const cart = state.cart;
  
  const isInCart = (id)=>{
      return cart.some(item => item.id === id)
  }

  const makeSlug = (title)=> title.toLowerCase().replace(/\s+/g, "-")
  


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

        <div className="top-product-content-box" >
            <Link  to={`/products/${makeSlug(product.title)}`}>
                <div className="top-product-img">
                    <img src={product.images[0]} alt={product.title} />
                </div>
            </Link>
            
            <div className="top-product-details">
                <Link to={`/products/${makeSlug(product.title)}`}>
                
                <div>
                    <div className="rating-star d-flex align-items-center">
                    {getStarRating(product.rateCount)}
                    </div>
                    <div className="top-product-heading">
                        <h5>{product.title}</h5>
                        <p>{product.info}</p>
                    </div>
                    <div className="top-product-price">
                        <p><FaIndianRupeeSign/>{product.finalPrice}<span>< FaIndianRupeeSign/>{product.originalPrice}</span></p>
                    </div>

                </div>
                </Link>
                

                <button className={`addcartbtn red-btn ${isInCart(product.id) ? "green-btn" : "red-btn"}`} onClick={(e)=> {
                    e.stopPropagation();
                    e.preventDefault();
                    dispatch({type: "add_to_cart", payload : product})
                 }}>{isInCart(product.id) ? "Added" : "add to cart"}</button>
            </div>
        </div>


      </div>
     
    
  )
}

