import React, {useState} from "react";
import './styles.scss'
import AllImages from "./AllImages";
import {ReactComponent as Left} from "./left.svg";
import {ReactComponent as Right} from "./right.svg";

// @ts-ignore
const PhotoGallery = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    return (
        <div className="SliderImages">
            {<Left className="left-arrow" onClick={prevSlide}/>}
            {<Right className="right-arrow" onClick={nextSlide}/>}
            {AllImages.map((images, index) => {
                return (
                    <div className={index === current ? "slide-active" : "slide"} key={index}>
                        {index === current && (<img src={images.image} alt="x" className="singleImage"/>)}
                    </div>
                )
            })}
        </div>
    )
}

export default PhotoGallery