import React, { useEffect, useState } from 'react'
import "../Responsive.css"
import { useParams } from 'react-router-dom'
import { useCartContext } from '../contextApi/CartProvider';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaStar, FaCheck, FaUser} from "react-icons/fa";
import Advantage from '../BodyComponent/Advantage';
import { reviewsData } from '../data/reviewsData';



export default function ProductDetails() {

const {title} = useParams();

const {state, dispatch} = useCartContext();

const makeSlug = (title) => title.toLowerCase().replace(/\s+/g,"-");

const product = state.products.find(p=> makeSlug(p.title) === title);

const currentProductCategory = product.category;
const currentProductId = product.id;


const relatedProduct = state.products.filter(p=> p.category === currentProductCategory && p.id !== currentProductId)

const cart = state.cart;

const isInCart = (id)=>{
    return cart.some(item => item.id === id)
}

const getStarRating = (count)=>{
    let star = [];
    for(let i=0; i < count; i++){
        star.push(<span key={i}>
            <FaStar style={{color: "red", marginRight: "7px"}}/>
        </span>)
    }
    return star;

}

const [activeImg, setActiveImg] = useState(product?.images[0]);


if (!product) {
    return <h2 className="text-center container my-5 text-white">Product not found</h2>;
  }

  return (
    <div>
       
{/* product details section start*/}

<section className="product-details-sec">
    <div className="container">
         <div className="row" id="product-details-row">

        <div className="col-md-7">
            <div className="row">
                <div className="col-md-2">
                    <div className="thumb-img">
                        {product.images.map((img, index) =>(
                            <img src={img} key={index} alt={product.title} className={`thumb ${activeImg === img ? "active" : ""}`} onClick={()=>setActiveImg(img)}/>
                        ))}
                    </div>
                </div>
                <div className="col-lg-10">
                    <div className="hero-img">
                        <img id="main-img" src={activeImg} alt={product.title}/>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-md-5">

            <div className="product-details-desc">
                <h4>{product.title}</h4>
                <h6>{product.info}</h6>
                <div className="prod-details-rating d-flex align-items-center ">
                    {getStarRating(product.rateCount)}
                    <p>{product.ratings}</p>
                </div>
            </div>

            <div className="product-details-price-sec row justify-content-between align-items-center">
                <div className="col-md-8">
                    <div className="product-details-price">
                        <p><FaIndianRupeeSign/>{product.finalPrice}<span><FaIndianRupeeSign/>{product.originalPrice}</span></p>
                    </div>
                    <p className="prod-details-save">you save: <span><FaIndianRupeeSign/>{product.originalPrice - product.finalPrice}</span><span>(33%)</span></p>
                    <p className="prod-tax">(inclusive all taxes)</p>
                </div>

                <div className="col-md-4">
                    <p className="prod-details-stock"><FaCheck/> in stock</p>
                </div>
                
            </div>

            <div className="product-details-offer">
                <h6>offers & discounts</h6>
                <div className="payment-btn">
                    <button>no cost EMI on credit cards</button>
                    <button>pay later & avail cashbacks</button>
                </div>
            </div>

            <button className={`addcartbtn red-btn mt-md-5 mt-sm-3 ${isInCart(product.id) ? "green-btn" : "red-btn"}`} onClick={()=>dispatch({type: "add_to_cart", payload: product})}>{isInCart(product.id) ? "Added" : "add to cart"}</button>

        </div>
               
               


        </div>
    </div>
</section>

{/* product details section end*/}













 {/* product details tab section start */}
 <section className="product-tab-sec">
    <div className="container">
        <ul className="nav nav-tabs product-details-tab" id="myTab" role="tablist">

            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="specification-tab" data-bs-toggle="tab" data-bs-target="#specification" type="button" role="tab" aria-controls="home" aria-selected="true">specification</button>
            </li>

            <li className="nav-item" role="presentation">
                <button className="nav-link" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="profile" aria-selected="false">overview</button>
            </li>

            <li className="nav-item" role="presentation">
                <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="contact" aria-selected="false">review</button>
            </li>

        </ul>


    <div className="tab-content product-details-tabcontent" id="myTabContent">
        
        <div className="tab-pane fade show active" id="specification" role="tabpanel" aria-labelledby="specification-tab">
            <div className="specification-container">
                <p>brand <span>{product.brand}</span></p>
                <p>model <span>{product.title}</span></p>
                <p>generic name <span>{product.category}</span></p>
                <p>headphone type <span>{product.type}</span></p>
                <p>connectivity <span>{product.connectivity}</span></p>
                <p>microphone <span>yes</span></p>
            </div>
        </div>

        <div className="tab-pane fade" id="overview" role="tabpanel" aria-labelledby="overview-tab">
            <h5>the <span className="overview-title">{product.title}</span><span className="overview-para"></span>provides with fabulous sound quality</h5>
            <ul className="overview-list">
                <li>sound tuned to perfection</li>
                <li>comfortable to wear</li>
                <li>long hours playback time</li>
            </ul>
            <p>Buy the <span className="overview-title">{product.title}</span>which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these Headphones giving you a truly awesome audio experience. It blends with exceptional sound quality and a range of smart features for an unrivalled listening experience.</p>
        </div>

        

        <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
            <div id="review-tab-container">

                {reviewsData.map((review)=>(
                    <div class="review-tab-details" key={review.id}>
                    <div class="row review-tab-row align-items-center">
                    <div class="col-md-1">
                        <div class="review-user">
                            <FaUser/>
                        </div>
                    </div>
                    <div class="col-md-11">
                        <div class="reviewer-details">
                            <h6>{review.name}</h6>
                            <p class="reviewer-rating">{getStarRating(review.rateCount)} <span>{review.date}</span></p>
                        </div>
                    </div>
                    </div>
                    <div class="reviewer-msg">
                        <p>{review.review}</p>
                    </div>
                    </div>
                ))}
                


            </div>
           
        </div>
        
    </div>

    </div>
 </section>
 

 
{/* <!-- product details tab section end --> */}


{/* <!-- related product start --> */}

<section className="related-product-sec">
    <div className="container">
        <div className="top-sec-heading related-prod-heading">
            <h3>related products</h3>
        </div>

        <div className="row related-prod-row">
            
            {relatedProduct.map(p=>(

                <div class="col-lg-3 col-md-4">
                    <div className="top-product-content-box">
                        <div className="top-product-img">
                            <img src={p.images[0]}/>
                        </div>
                        <div className="top-product-details">
                        <div className="rating-star d-flex align-items-center">
                            {getStarRating(p.rateCount)}
                        </div>
                        <div className="top-product-heading">
                            <h5>{p.title}</h5>
                            <p>{p.info}</p>
                        </div>
                        <div className="top-product-price">
                            <p><FaIndianRupeeSign/>{p.finalPrice}<span><FaIndianRupeeSign/>{p.originalPrice}</span></p>
                        </div>
                        <button className="addcartbtn red-btn" onClick={()=>dispatch({type: "add_to_cart", payload: p})}>add to cart</button>
                        </div>
                            
                    </div>
                </div>

            ))}
            


        </div>


    </div>
</section>

{/* <!-- related product end --> */}

<Advantage/>

    </div>

    
  )
}
