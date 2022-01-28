/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react" 
import React from "react"  
import BtnSlider from "../BtnSlider/BtnSlider"   
import Carousel from "../Carousel/Carousel"
import { ButtonCard } from "../ButtonCard/ButtonCard"


/* eslint-disable @next/next/no-img-element */ 

export const GalleryItem = (props) => {  
 
    const images = props.photos?.map((itemall) => (itemall.url))  

    console.log(images)

    
    const [imageToShow, setImageToShow] = useState(images[0]) 
    console.log(imageToShow)   

    const [lightboxDisplay, setLightBoxDisplay] = useState(false) 

    const imageCards = props.photos.map((listall) => {
        <img onClick={() => showImage(listall.url)} src={listall.url}></img>
    })         

 
    const showImage = (url) => {
        setImageToShow(url);
        setLightBoxDisplay(true)
    }  

    const hideLightBox = () => {
        setLightBoxDisplay(false)
    }  

    const showNext = (e) => {
        e.stopPropagation(); 
        let currentIndex = images.indexOf(imageToShow) 
        if (currentIndex >= images.length - 1) {
            let loopsimg = props.photos.length - 1;
            let nextImage = images[currentIndex - loopsimg];
            setImageToShow(nextImage);
            //setLightBoxDisplay(false);
        } else {
            let nextImage = images[currentIndex + 1];
            setImageToShow(nextImage);
        }
    } 

    const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = images.indexOf(imageToShow);
        if (currentIndex <= 0) {
            let loopsimg = props.photos.length - 1;
            let nextImage = images[currentIndex + loopsimg];
            setImageToShow(nextImage);
            // setLightBoxDisplay(false);
        } else {
            let nextImage = images[currentIndex - 1];
            setImageToShow(nextImage);
        }
    };
  



   
    return( 
        <>

            <div id="lightbox" >
                <div className="container">
                    <div className="row">
                            <div className="lightbox__view" >
                                <img id="lightbox-img" src={imageToShow}></img>
                               
                            </div>
                            <div className="clearfix"></div>
                            <Carousel show={2} >
                                {props.photos.map((item, index) => (
                                    <div key={item.id}>
                                        <div style={{ padding: 17 }} >
                                            <img className="image-card-carousel" onClick={() => showImage(item.url)} src={item.url} />
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