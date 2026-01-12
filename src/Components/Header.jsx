import React, { useEffect } from 'react'
import "../Style.css"
import {Link} from 'react-router-dom'
import { FaMagnifyingGlass, FaXmark} from "react-icons/fa6";
import { FaShoppingCart} from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import "../Responsive.css"
import { useCartContext } from '../contextApi/CartProvider';

export default function Header() {
  const {state, dispatch} = useCartContext();
  const cart = state.cart;

  useEffect(()=>{
    const header = document.querySelector(".tech-nav");

    const handleScroll = ()=>{
      if(window.scrollY > 100){
        header.classList.add("fixed")
      }else{
         header.classList.remove("fixed")
      }
    }

    window.addEventListener("scroll", handleScroll);

    return ()=> window.removeEventListener("scroll", handleScroll)

  },[])





  return (
    <div>

         {/* <!-- NAVBAR START--> */}

<header className="tech-nav">

<nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className="navbar-brand" to="/">Tech-Shop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto d-flex align-items-center">
        
        <li className="nav-item search-box">
          
            <div className="search-overlay"></div> 

              <Link><FaMagnifyingGlass/></Link>
              <p className="seatch-text">search</p>

                <div className="search-container">
                    <input type="text" placeholder="Search for products..." id="navSearch" autocomplete="off"/>
                    <span className="clear-search-btn"><FaXmark /></span>
                    <ul className="suggestions">
                        {/* <!-- dynamically rendering product name --> */}
                    </ul>
                </div>
        </li>

        <li className="nav-item cart-icon">
          <p className="cart-text">Cart</p>
          <Link className="nav-link" to="/cart"><FaShoppingCart/></Link>
          {cart.length !== 0 && <span>{cart.length}</span>}
        </li>

        <li className="nav-item user-icon">
          <Link className="nav-link" to="#"><FiUser/></Link>

          <div className="user-primary-box">
            <h5>hello</h5>
            <h6>Access account and manage orders</h6>
            <button>Login / Signup</button>
            <p>please login</p>
          </div>

        </li>

      </ul>
    </div>
  </div>
</nav>

</header>

<div className="log-overlay"></div>

{/* <!-- login box --> */}

    <div className="login-box">
        <span className="login-clear-btn"><FaXmark /></span>
        <h4>Login</h4>
        <h5>new to tech-shop ? <span className="createAccount">create an account</span></h5>
        <input type="email" name="" id="log-email" placeholder="email"/>
        <input type="password" name="" id="log-pass" placeholder="password"/>
        <button className="red-btn">login</button>
        <div className="log-dash d-flex justify-content-between align-items-center mt-md-5 mt-sm-3">
            <div></div>
            <p>or login with</p>
            <div></div>
        </div>
        <div className="login-social-btn">
            <button className="login-fb"><Link to="#">facebook</Link></button>
            <button className="login-g"><Link to="#">google</Link></button>
            <button className="login-twt"><Link to="#">twitter</Link></button>
        </div>
    </div>

    {/* <!-- sign up box --> */}

    <div className="login-box signup-box">
        <span className="login-clear-btn sign-clear-btn"><FaXmark /></span>
        <h4>signup</h4>
        <h5>already have an account ? <span className="createAccount signup-login">login</span></h5>
        <input type="text" id="sign-user" placeholder="username"/>
        <input type="email" name="" id="sign-email" placeholder="email"/>
        <input type="password" name="" id="sign-pass" placeholder="password"/>
        <input type="password" name="" id="sign-con-pass" placeholder="confirm password"/>

        <button className="red-btn">signup</button>
        <div className="log-dash d-flex justify-content-between align-items-center mt-md-5 mt-sm-3">
            <div></div>
            <p>or login with</p>
            <div></div>
        </div>
        <div className="login-social-btn">
            <button className="login-fb"><Link to="#">facebook</Link></button>
            <button className="login-g"><Link to="#">google</Link></button>
            <button className="login-twt"><Link to="#">twitter</Link></button>
        </div>
    </div>
   
{/* <!-- NAVBAR END --> */}

    </div>
  )
}
