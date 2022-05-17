/**
 * Description: Back to Top 
 * Name: BackToTop
 */

import React, { useEffect, useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import "./BackToTop.scss"

const BackToTop = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);


    const toggleVisibility = () => {
        if(window.scrollY > 300) {
            setShowBackToTop(true)
        } else{
            setShowBackToTop(false)
        }
    }


    const scrollToTop = () => {
        window.scrollTo({top:0 , behavior: "smooth"})
    }

    useEffect(()=>{
     window.addEventListener('scroll',toggleVisibility)
    return () => {
        window.removeEventListener('scroll',toggleVisibility)
    }
    },[])

    return(
    <div id="back-to-top">
       <div 
        className={showBackToTop ? 'back-to-top' : 'hide-back-to-top' }
        onClick={scrollToTop}
       >
        <BsFillArrowDownCircleFill  className="back-to-top__icon"/>
        </div> 

    </div>)
}
export default BackToTop;