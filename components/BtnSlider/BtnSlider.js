import React from "react";


export default function BtnSlider({ direction, moveSlide }) {

    console.log(direction, moveSlide)


    return (
        <button className={direction === "next" ? "btn-slide next" : "btn-slide prev"} onClick={moveSlide}>
            <img src={direction === "next" ? <p>Hello</p> : <p>Bye</p>} ></img>

        </button>
    )


}