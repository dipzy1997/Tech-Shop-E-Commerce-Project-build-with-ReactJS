import React from 'react'
import "../Style.css"
import {Link} from 'react-router-dom'
import { FaMagnifyingGlass, FaXmark} from "react-icons/fa6";
import { FaShoppingCart} from "react-icons/fa";
import { FiUser } from "react-icons/fi";

export default function Header() {
  return (
    <div>

         {/* <!-- NAVBAR START--> */}

<header class="tech-nav">

<nav class="navbar navbar-expand-lg">
  <div class="container">
    <Link class="navbar-brand" to="/">Tech-Shop</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto d-flex align-items-center">
        
        <li class="nav-item search-box">
            <div class="search-overlay"></div> 
              <Link><FaMagnifyingGlass/></Link>
                <div class="search-container">
                    <input type="text" placeholder="Search for products..." id="navSearch" autocomplete="off"/>
                    <span class="clear-search-btn"><FaXmark /></span>
                    <ul class="suggestions">
                        {/* <!-- dynamically rendering product name --> */}
                    </ul>
                </div>
        </li>

        <li class="nav-item cart-icon">
          <Link class="nav-link" to="./cart.html"><FaShoppingCart/></Link>
          <span></span>
        </li>

        <li class="nav-item user-icon">
          <Link class="nav-link" to="#"><FiUser/></Link>

          <div class="user-primary-box">
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

<div class="log-overlay"></div>

{/* <!-- login box --> */}

    <div class="login-box">
        <span class="login-clear-btn"><FaXmark /></span>
        <h4>Login</h4>
        <h5>new to tech-shop ? <span class="createAccount">create an account</span></h5>
        <input type="email" name="" id="log-email" placeholder="email"/>
        <input type="password" name="" id="log-pass" placeholder="password"/>
        <button class="red-btn">login</button>
        <div class="log-dash d-flex justify-content-between align-items-center mt-md-5 mt-sm-3">
            <div></div>
            <p>or login with</p>
            <div></div>
        </div>
        <div class="login-social-btn">
            <button class="login-fb"><Link to="#">facebook</Link></button>
            <button class="login-g"><Link to="#">google</Link></button>
            <button class="login-twt"><Link to="#">twitter</Link></button>
        </div>
    </div>

    {/* <!-- sign up box --> */}

    <div class="login-box signup-box">
        <span class="login-clear-btn sign-clear-btn"><FaXmark /></span>
        <h4>signup</h4>
        <h5>already have an account ? <span class="createAccount signup-login">login</span></h5>
        <input type="text" id="sign-user" placeholder="username"/>
        <input type="email" name="" id="sign-email" placeholder="email"/>
        <input type="password" name="" id="sign-pass" placeholder="password"/>
        <input type="password" name="" id="sign-con-pass" placeholder="confirm password"/>

        <button class="red-btn">signup</button>
        <div class="log-dash d-flex justify-content-between align-items-center mt-md-5 mt-sm-3">
            <div></div>
            <p>or login with</p>
            <div></div>
        </div>
        <div class="login-social-btn">
            <button class="login-fb"><Link to="#">facebook</Link></button>
            <button class="login-g"><Link to="#">google</Link></button>
            <button class="login-twt"><Link to="#">twitter</Link></button>
        </div>
    </div>
   
{/* <!-- NAVBAR END --> */}

    </div>
  )
}
