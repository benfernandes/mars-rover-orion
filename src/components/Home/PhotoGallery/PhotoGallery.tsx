import React, {useEffect, useState} from "react";
import './styles.scss'
import {GetRoverPhotos} from "../../../APIs/RoverPhotoRepo";
import {GetRoverManifest, Rover} from "../../../APIs/RoverManifest";


const PhotoGallery = () => {
    const [imageData, setImageData] = useState<string[]>([]);



    useEffect(() => {
        GetRoverManifest(Rover.spirit).then(manifestData => {
            const max_sol = manifestData.max_sol - 1;

            GetRoverPhotos(Rover.spirit, 4).then(data => {
                setImageData(data.map(image => image.img_src))
            })
        })

    }, [])

    const [current, setCurrent] = useState(0);
    const length = imageData.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }


    return (
<<<<<<< HEAD
        <div className="placeholder">
            <h2>Placeholder Gallery</h2>
            <img className={"placeholder-img"} src={"/assets/placeholder.jpg"} />
=======
        <div className="SliderImages">
            <img src={"/icons/left.svg"} className="left-arrow" alt="Left Arrow" onClick={prevSlide}/>
            <img src={"/icons/right.svg"} className="right-arrow" alt="Right Arrow" onClick={nextSlide}/>
            {imageData.map((images, index) => {
                return (
                    <div className={index === current ? "slide-active" : "slide"} key={index}>
                        {index === current && (<img src={images} alt="x" className="singleImage"/>)}
                    </div>
                )
            })}
>>>>>>> origin/20-PhotoGallery
        </div>
    )
}

export default PhotoGallery
