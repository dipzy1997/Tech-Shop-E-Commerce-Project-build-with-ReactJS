import React, { useEffect, useRef, useState } from 'react'
import { FaArrowUp } from "react-icons/fa6";

export default function BackToTop() {

    const topRef = useRef(null);
    const [showBtn, setShowBtn] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 100){
                setShowBtn(true)
            }
            else{
                setShowBtn(false)
            }
        }
        
        window.addEventListener("scroll", handleScroll);

        return ()=> window.removeEventListener("scroll", handleScroll)
    },[]);

    const scrollToTop = ()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

  return (
     <div class="container">
        <div ref={topRef}></div>

        {showBtn && (
            <button id="backToTop" onClick={scrollToTop}><FaArrowUp/></button>
        ) }
     </div>
  )
}
