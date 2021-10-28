import React, {useState} from 'react';
import './styles.scss';
import ImageSelector from "../../components/PhotoGallery/ImageSelector/ImageSelector";
import {imageUrls} from "../../components/PhotoGallery/ImageSelector/ImageUrls";

const GalleryPage = () => {

    const [imgIndex, setImgIndex] = useState(0);

    const sendDataToParent = (index : any) => {
        setImgIndex(index)
    }

    return (
        <div className="gallery-page">
            <ImageSelector sendDataToParent={sendDataToParent} selectedIndex={imgIndex} imageUrls={imageUrls}/>
        </div>
    )
}

export default GalleryPage
