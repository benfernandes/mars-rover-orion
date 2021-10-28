import React, {SetStateAction, useEffect, useState} from 'react';
import './styles.scss';
import ImageSelector from "../../components/PhotoGallery/ImageSelector/ImageSelector";
import PhotoViewer from "../../components/PhotoGallery/PhotoViewer/PhotoViewer";
import {GetRoverPhotos} from "../../APIs/RoverPhotoRepo";
import {Rover} from "../../APIs/RoverManifest";
import PhotoViewerForm from "../../components/PhotoGallery/PhotoViewerForm/PhotoViewerForm";

const GalleryPage : React.FC = () => {

    const [imgIndex, setImgIndex] = useState(0);
    const [imgData, setImgData] = useState([""]);
    const [formData, setFormData] = useState({
        "rover": Rover.curiosity,
        "sol": 1000,
        "camera": undefined
    });

    useEffect(() => {
        console.log(formData)
        GetRoverPhotos(formData["rover"], formData["sol"], formData["camera"])
            .then(data => {
                if (data !== undefined) {
                    setImgData(data.map(image => image.img_src))}
            })
        console.log(imgData)
    }, [formData])

    const sendDataToParent = (index : number) => {
        setImgIndex(index)
    }

    const sendFormDataToParent = (data: SetStateAction<{"rover": Rover, "sol": number, "camera": undefined }>) => {
        setFormData(data)
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
