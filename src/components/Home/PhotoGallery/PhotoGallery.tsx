import React, {useState} from "react";
import './styles.scss'


const PhotoGallery = ({ slides }: {slides: Array<{image:string}>}) => {

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
            <img src={"/icons/left.svg"} className="left-arrow" alt="Left Arrow" onClick={prevSlide}/>
            <img src={"/icons/right.svg"} className="right-arrow" alt="Right Arrow" onClick={nextSlide}/>
            {slides.map((images, index) => {
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