import React, { useEffect, useRef, useState } from 'react'
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

  const [showUserPrimaryBox, setShowUserPrimaryBox] = useState(false);
  const [showLoginBox, setShowLogInBox] = useState(false);
  const [showSignUpBox, setShowSignUpBox] = useState(false);

const openLogin = () => {
  setShowLogInBox(true);
  setShowSignUpBox(false);
};

const openSignup = () => {
  setShowSignUpBox(true);
  setShowLogInBox(false);
};

const closeAllAuthBox = () => {
  setShowLogInBox(false);
  setShowSignUpBox(false);
};

const searchRef = useRef(null);
const debounceRef = useRef(null);

const [suggestions, setSuggestions] = useState([]);
const [showSearch, setShowSearch] = useState(false);


const handleSearch = ()=>{
  const value = searchRef.current.value;
 
  if(debounceRef.current){
    clearTimeout(debounceRef.current)
  }

  debounceRef.current = setTimeout(()=>{

    if(value.trim() === ""){
    setSuggestions([])
    return;
    }
    const filter = state.products.filter(p=> p.title.toLowerCase().includes(value.toLowerCase()));
    setSuggestions(filter);

  },500)
}

//click on suggestion that goes to input

const handleSuggestionClick = (title)=>{
  searchRef.current.value = title;
  setSuggestions([])
}

const openSearch = ()=>{
  setShowSearch(true);
  setTimeout(() => {
    searchRef.current?.focus();
  }, 100);
}

const closeSearch = ()=>{
  setShowSearch(false)
}




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
      <ul className="navbar-nav ms-auto d-flex align-items-lg-center">
        
        <li className="nav-item search-box">
          
            <div className={`search-overlay ${showSearch? "active": ""}`} onClick={closeSearch}></div> 

              <Link onClick={openSearch}><FaMagnifyingGlass/></Link>
              <p className="seatch-text" onClick={openSearch}>search</p>

                <div className={`search-container ${showSearch? "active" : ""}`}>
                    <input type="text" placeholder="Search for products..." id="navSearch" autocomplete="off" ref={searchRef} onKeyUp={handleSearch}/>
                    <span className="clear-search-btn" onClick={closeSearch}><FaXmark /></span>
                    <ul className={`suggestions ${suggestions.length ? "active":""}`}>
                        {suggestions.map((item)=>(
                          <li key={item.id} onClick={()=>handleSuggestionClick(item.title)}>
                              {item.title}
                          </li>
                        ))}
                    </ul>
                </div>
        </li>

        <li className="nav-item cart-icon">
          <p className="cart-text"><Link to="/cart">Cart</Link></p>
          <Link className="nav-link" to="/cart"><FaShoppingCart/></Link>
          {cart.length !== 0 && <span>{cart.length}</span>}
        </li>

        <li className="nav-item user-icon" onClick={()=> setShowUserPrimaryBox(prev => !prev)}>
          <p className="user-text" onClick={()=> setShowUserPrimaryBox(prev => !prev)}>User</p>
          <Link className="nav-link" to="#"><FiUser/></Link>

          <div className={`user-primary-box ${showUserPrimaryBox ? "active" : ""}`}>
            <h5>hello</h5>
            <h6>Access account and manage orders</h6>
            <button onClick={openLogin}>Login / Signup</button>
            <p>please login</p>
          </div>

        </li>

      </ul>
    </div>
  </div>
</nav>

</header>

<div className={`log-overlay ${(showLoginBox || showSignUpBox) ? "active" : ""} `} onClick={closeAllAuthBox}></div>

{/* <!-- login box --> */}

    <div className={`login-box ${showLoginBox? "active" : ""}`}>
        <span className="login-clear-btn" onClick={closeAllAuthBox}><FaXmark /></span>
        <h4>Login</h4>
        <h5>new to tech-shop ? <span className="createAccount" onClick={openSignup}>create an account</span></h5>
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

    <div className={`login-box signup-box ${showSignUpBox ? "active": ""}`}>
        <span className="login-clear-btn sign-clear-btn" onClick={closeAllAuthBox}><FaXmark /></span>
        <h4>signup</h4>
        <h5>already have an account ? <span className="createAccount signup-login" onClick={openLogin}>login</span></h5>
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
