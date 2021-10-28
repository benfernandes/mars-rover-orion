import React, {useEffect, useState} from 'react';
import './styles.scss';
import ImageSelector from "../../components/PhotoGallery/ImageSelector/ImageSelector";
import PhotoViewer from "../../components/PhotoGallery/PhotoViewer/PhotoViewer";
import {GetRoverPhotos} from "../../APIs/RoverPhotoRepo";
import {Rover} from "../../APIs/RoverManifest";

const GalleryPage : React.FC = () => {

    const [imgIndex, setImgIndex] = useState(0);
    const [imgData, setImgData] = useState([""])

    useEffect(() => {
        GetRoverPhotos(Rover.curiosity).then(data => {
            setImgData(data.map(image => image.img_src))
            console.log(data)
        })
    }, [])

    const sendDataToParent = (index : any) => {
        setImgIndex(index)
    }

    return (
        <div className="gallery-page">
            <h1>Mars Rover Photo Viewer</h1>
            <PhotoViewer src={imgData[imgIndex]} />
            <h2>Select your photo</h2>
            <ImageSelector sendDataToParent={sendDataToParent} selectedIndex={imgIndex} imageUrls={imgData}/>
        </div>
    )
}

export default GalleryPage
