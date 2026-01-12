import React, { useEffect, useMemo } from 'react'
import "../Responsive.css"
import { useCartContext } from '../contextApi/CartProvider'
import { FaIndianRupeeSign, FaTrashCan } from "react-icons/fa6";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom"



export default function Cart() {

    const { state, dispatch } = useCartContext();
    const cart = state.cart;

    const total = useMemo(()=>{
        return cart.reduce((acc, item)=> acc + item.finalPrice * item.qty, 0 )
    },[cart]);

    const originalPrice = useMemo(()=>{
        return cart.reduce((acc, item)=> acc+ item.originalPrice * item.qty, 0)
    },[cart])

    const discountPrice = useMemo(()=>{
        return originalPrice - total
    },[originalPrice, total])


console.log("CART:", cart);

    return (
        <div>
            {/* <!-- product added to cart section start --> */}

            {cart.length === 0 ? (
                <section className="empty-cart-sec">

                    <div className="empty-cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-x" viewBox="0 0 16 16">
                            <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z" />
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                        </svg>
                        <p>your cart is empty</p>
                        <Link to="/allProducts" className="red-btn">start shopping</Link>
                    </div>

                </section>
            ) : (
                <section className="prod-added-to-cart">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-8">
                                <div className="added-prod-box">

                                    {cart.map(item => (
                                        <div className="added-prod-details" key={item.id}>

                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="cart-prod-img">
                                                        <img src={item.images[0]} alt={item.title} />
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="prod-name">
                                                        <h6>{item.title} {item.info || ""} </h6>
                                                        <p><FaIndianRupeeSign />{item.finalPrice}<span><FaIndianRupeeSign />{item.originalPrice}</span></p>
                                                    </div>
                                                    <div className="inc-dec-btn d-flex align-items-center">
                                                        <button className="decrease" onClick={() => dispatch({ type: "decreaseQty", payload: item.id })}><FaMinus /></button>
                                                        <h6>{item.qty}</h6>
                                                        <button className="increase" onClick={() => dispatch({ type: "increaseQty", payload: item.id })}><FaPlus /></button>
                                                    </div>
                                                </div>
                                                <div className="col-md-1">
                                                    <button className="delete-btn" onClick={() => dispatch({ type: "removeFromCart", payload: item.id })}><FaTrashCan/></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}




                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="order-summary-sec">
                                    <h6>order summary ({cart.length} items)</h6>
                                    <div className="price-summary-sec">
                                        <div className="original-price d-flex justify-content-between">
                                            <p>original price</p>
                                            <span><FaIndianRupeeSign />{originalPrice}</span>
                                        </div>

                                        <div className="discount d-flex justify-content-between">
                                            <p>discount </p>
                                            <span>-<FaIndianRupeeSign />{discountPrice}</span>
                                        </div>
                                        <div className="delivery d-flex justify-content-between">
                                            <p>delivery</p>
                                            <span>free</span>
                                        </div>
                                        <div className="total-price d-flex justify-content-between">
                                            <p>total price</p>
                                            <span><FaIndianRupeeSign />{total}</span>
                                        </div>
                                        <button className="red-btn w-100">checkout</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            )}



            {/* <!-- product added to cart section end -->








{/* <!-- empty cart view section end--> */}

        </div>
    )
}
