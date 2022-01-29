/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react"
import React from "react"
import BtnSlider from "../BtnSlider/BtnSlider"
import Carousel from "../Carousel/Carousel"



/* eslint-disable @next/next/no-img-element */

export const GalleryItem = (props) => {



    return (
        <>
            <div id="lightbox" >
                <div className="container">
                    <div className="row">
                        <div className="lightbox__view" >
                            <img id="lightbox-img" src={props.img}></img>

                        </div>
                        <div className="clearfix"></div>
                        <Carousel show={2} >
                            {props.photos.map((item, index) => (
                                <div key={item.id}>
                                    <div style={{ padding: 17 }} >
                                        <img className="image-card-carousel" onClick={() => props.showImage(item.url)} src={item.url} />
                                    </div>
                                </div>
                            ))}
                        </Carousel>


                    </div>
                </div>
            </div>
        </>
    )


}