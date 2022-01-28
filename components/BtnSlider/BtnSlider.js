/* eslint-disable jsx-a11y/alt-text */
import React from "react"; 
import LeftArrow from './../../public/Arrow_left.svg.png' 
import RightArrow from './../../public/Arrow_right.svg.png'

export default function BtnSlider({direction , moveSlide}) {
      
    console.log(direction , moveSlide) 
   

    return (
        <button className={direction === "next" ? "btn-slide next" : "btn-slide prev"} onClick={moveSlide}>
        <img src={direction === "next" ? RightArrow : LeftArrow} ></img>

        </button>
    )
     

}