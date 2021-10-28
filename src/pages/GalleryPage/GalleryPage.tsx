import React, {useEffect, useState} from 'react';
import './styles.scss';
import ImageSelector from "../../components/PhotoGallery/ImageSelector/ImageSelector";
import PhotoViewer from "../../components/PhotoGallery/PhotoViewer/PhotoViewer";
import {GetRoverPhotos} from "../../APIs/RoverPhotoRepo";
import {Rover} from "../../APIs/RoverManifest";
import PhotoViewerForm from "../../components/PhotoGallery/PhotoViewerForm/PhotoViewerForm";

const GalleryPage : React.FC = () => {

    const [imgIndex, setImgIndex] = useState(0);
    const [imgData, setImgData] = useState([""]);
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        GetRoverPhotos(Rover.curiosity).then(data => {
            setImgData(data.map(image => image.img_src))
            console.log(data)
        })
    }, [])

    //TODO remove props : any

    const sendDataToParent = (index : any) => {
        setImgIndex(index)
    }

    const sendFormDataToParent = (formData : any) => {
        setFormData(formData)
    }

    return (
        <div className="gallery-page">
            <h1>Mars Rover Photo Viewer</h1>
            <PhotoViewerForm sendFormDataToParent={sendFormDataToParent} />
            <PhotoViewer src={imgData[imgIndex]} />
            <h2>Select your photo</h2>
            <ImageSelector sendDataToParent={sendDataToParent} selectedIndex={imgIndex} imageUrls={imgData}/>
        </div>
    )
}

export default GalleryPage
