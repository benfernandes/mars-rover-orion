import React, {useState} from 'react';
import './styles.scss';
import ImageSelector from "../../components/PhotoGallery/ImageSelector/ImageSelector";
import {imageUrls} from "../../components/PhotoGallery/ImageSelector/ImageUrls";
import PhotoViewer from "../../components/PhotoGallery/PhotoViewer/PhotoViewer";

const GalleryPage = () => {

    const [imgIndex, setImgIndex] = useState(0);

    const sendDataToParent = (index : any) => {
        setImgIndex(index)
    }

    return (
        <div className="gallery-page">
            <h1>Mars Rover Photo Viewer</h1>
            <PhotoViewer src={imageUrls[imgIndex]} />
            <h2>Select your photo</h2>
            <ImageSelector sendDataToParent={sendDataToParent} selectedIndex={imgIndex} imageUrls={imageUrls}/>
        </div>
    )
}

export default GalleryPage
